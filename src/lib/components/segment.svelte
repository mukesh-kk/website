<script lang="ts" context="module">
  import { v4 } from "uuid";

  declare global {
    interface Window {
      analytics: any;
      doNotTrack: any;
      href?: string;
      prevPages?: string[];
      localStorage: any;
    }
  }

  interface PageProps {
    url: string;
    path: string;
    referrer?: string;
    title?: string;
    search?: string;
  }

  const allowsAnalytics = () => {
    return !!Cookies.get(cookies.ANALYTICAL);
  };

  const getOrSetCookieId = () => {
    if (!allowsAnalytics()) {
      return;
    }

    var cookieId = Cookies.get("ajs_anonymous_id");
    if (!cookieId) {
      cookieId = v4();
      Cookies.set("ajs_anonymous_id", cookieId, {
        domain: ".gitpod.io",
        expires: 365,
      });
    }
    return cookieId;
  };

  const getAuthenticationStatus = () => {
    return allowsAnalytics() ? !!Cookies.get("gitpod-user") : undefined;
  };

  const getPageProps = (): PageProps => {
    return {
      path: window.location.pathname,
      url: window.location.href,
      search: window.location.search,
      title: document.title,
      referrer: window.prevPages
        ? window.prevPages[window.prevPages.length - 1]
        : undefined,
    };
  };

  export const trackEvent = async (eventName: string, props: any) => {
    const body: AnalyticsPayload = {
      cookieId: getOrSetCookieId(),
      type: "event",
      eventName,
      props: props,
      context: {
        page: getPageProps(),
        allowsAnalytics: allowsAnalytics(),
        authenticated: getAuthenticationStatus(),
      },
    };

    await fetch("/api/collect-data", {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  export const trackPage = async () => {
    const pageProps = getPageProps();
    const body: AnalyticsPayload = {
      cookieId: getOrSetCookieId(),
      type: "page",
      props: pageProps,
      context: {
        page: pageProps,
        allowsAnalytics: allowsAnalytics(),
        authenticated: getAuthenticationStatus(),
      },
    };

    await fetch("/api/collect-data", {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  export const trackIdentity = async (traits: any) => {
    const body: AnalyticsPayload = {
      cookieId: getOrSetCookieId(),
      type: "identity",
      traits: traits,
      context: {
        page: getPageProps(),
        allowsAnalytics: allowsAnalytics(),
        authenticated: getAuthenticationStatus(),
      },
    };

    await fetch("/api/collect-data", {
      method: "POST",
      body: JSON.stringify(body),
    });
  };
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Cookies from "js-cookie";
  import { cookies } from "$lib/constants";
  import type { AnalyticsPayload } from "../types/analytics";

  interface TrackWebsiteClick {
    path: string;
    url: string;
    context?: string;
    position?: string;
    variant?: string;
    label?: string;
    destination?: string;
    dnt?: boolean;
  }

  const implicitPositions = ["nav", "footer", "main"];

  const handleButtonOrAnchorTracking = (props: MouseEvent) => {
    var curr = props.target as HTMLElement;
    //check if current target or any ancestor up to document is button or anchor
    while (
      curr.parentNode != undefined &&
      !(curr.parentNode instanceof Document)
    ) {
      if (
        curr instanceof HTMLButtonElement ||
        curr instanceof HTMLAnchorElement ||
        (curr instanceof HTMLDivElement && curr.onclick) ||
        (curr instanceof HTMLInputElement &&
          curr.classList.contains("toggle")) ||
        (curr instanceof HTMLDetailsElement && !curr.open)
      ) {
        trackButtonOrAnchor(curr);
        break; //finding first ancestor is sufficient
      }
      curr = curr.parentNode as HTMLElement;
    }
  };

  const trackButtonOrAnchor = async (
    target:
      | HTMLAnchorElement
      | HTMLButtonElement
      | HTMLDivElement
      | HTMLDetailsElement
  ) => {
    //read manually passed analytics props from 'data-analytics' attribute of event target
    let passedProps: TrackWebsiteClick | undefined;
    if (target.dataset.analytics) {
      try {
        passedProps = JSON.parse(target.dataset.analytics) as TrackWebsiteClick;
      } catch (error) {
        console.error(error);
      }
    }

    let trackingMsg: TrackWebsiteClick = {
      path: window.location.pathname,
      url: window.location.href,
      label: target.innerText || target.ariaLabel,
    };

    //assign style of button to variant (e.g. if class contains "btn-primary", "btn-primary" will be passed)
    for (var i = 0; i < target.classList.length; i++) {
      const item = target.classList[i];
      if (/btn-.*/.test(item)) {
        trackingMsg.variant = item;
        break;
      }
    }

    if (target instanceof HTMLDetailsElement) {
      trackingMsg.variant = "open_details";
    }

    if (target instanceof HTMLAnchorElement) {
      const anchor = target as HTMLAnchorElement;
      trackingMsg.destination = anchor.href;
      //an anchor tag that is not styled as button will be classified as "link" variant
      trackingMsg.variant = trackingMsg.variant || "link";
    }

    const getAncestorProps = (
      curr: HTMLElement | null
    ): TrackWebsiteClick | undefined => {
      const curr_tag = curr.tagName?.toLowerCase();
      if (!curr || curr_tag == "body") {
        return;
      }
      const ancestorProps: TrackWebsiteClick | undefined = getAncestorProps(
        curr.parentElement
      );
      const currProps = JSON.parse(
        curr.dataset.analytics || "{}"
      ) as TrackWebsiteClick;
      //set position in trackingMsg if it can be read from ancestor prop
      if (implicitPositions.includes(curr_tag)) {
        trackingMsg.position = curr_tag;
      }
      return { ...ancestorProps, ...currProps };
    };

    const ancestorProps = getAncestorProps(target);

    //props that were passed directly to the event target take precedence over those passed to ancestor elements, which take precedence over those implicitly determined.
    trackingMsg = { ...trackingMsg, ...ancestorProps, ...passedProps };

    //"signup" context always takes preferences over others (relevant for marketing attribution)
    if (
      !Cookies.get("gitpod-user") &&
      target instanceof HTMLAnchorElement &&
      (target as HTMLAnchorElement).href.startsWith("https://gitpod.io/")
    ) {
      trackingMsg.context = "signup";
    }

    //if dnt was passed to event target or any ancestor, no track call is done
    if (trackingMsg.dnt) {
      return;
    }
    await trackEvent("website_clicked", trackingMsg);
  };

  onMount(async () => {
    // Track first page
    await trackPage();
    window.prevPages = [window.location.href];
    window.addEventListener("click", handleButtonOrAnchorTracking, true);

    // Track Extension install or uninstall if necessary
    if (
      ["/extension-activation", "/extension-uninstall"].indexOf(
        window.location.pathname
      ) > -1
    ) {
      const doTrack = JSON.parse(
        new URLSearchParams(window.location.search).get("track")
      );
      if (doTrack) {
        await trackEvent(
          window.location.pathname == "/extension-activation"
            ? "extension_installed"
            : "extension_uninstalled",
          {}
        );
        window.location.href =
          window.location.origin + window.location.pathname;
      }
    }
  });

  $: if ($page.url.pathname) {
    // We need to depend on $page.url.pathname to trigger
    // a recompute on each new page.
    if (typeof window !== "undefined" && window.prevPages) {
      // Track subsequent pages
      trackPage().then(() => {
        window.prevPages.push(window.location.href);
        if (window.prevPages.length > 2) {
          window.prevPages.shift();
        }
      });
    }
  }
</script>
