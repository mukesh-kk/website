<script lang="ts">
  // Couldn't create this component entirely dynamic, because Slots can't be named dynamically
  // Had to use !important to make sure the styles from tailwinds prose-class are overridden
  import type { comparisonItem } from "$lib/types/docs";
  import { onMount } from "svelte";
  import { LocalStorageKeys } from "$lib/constants";

  export let items: comparisonItem[] = [
    {
      mobileTitle: "VS Code Browser",
      title: "VS Code Browser",
      value: 1,
      slotName: "vscodebrowser",
    },
    {
      mobileTitle: "VS Code",
      title: "VS Code Desktop",
      value: 2,
      slotName: "vscodedesktop",
    },
    {
      mobileTitle: "JetBrains",
      title: "JetBrains",
      value: 3,
      slotName: "jetbrains",
    },
    {
      mobileTitle: "Command Line",
      title: "Command Line",
      value: 4,
      slotName: "commandline",
    },
  ];
  let activeValue = 1;

  const rememberLastAccessed = () => {
    try {
      localStorage.setItem(
        LocalStorageKeys.IDE_TOGGLE_PREFERENCE,
        items[activeValue - 1].slotName
      );
      const event = new StorageEvent("storage", {
        key: LocalStorageKeys.IDE_TOGGLE_PREFERENCE,
        newValue: items[activeValue - 1].slotName,
      });
      window.dispatchEvent(event);
    } catch {}
  };

  const changeTab = (tabValue: number) => () => {
    activeValue = tabValue;
    rememberLastAccessed();
  };

  let ariaIds: any = { tab: {}, tabpanel: {} };

  if (!globalThis.counter) {
    globalThis.counter = { tab: 1, tabpanel: 1 };
  }

  const updateFromLocalStorage = () => {
    try {
      const lastAccessed = localStorage.getItem(
        LocalStorageKeys.IDE_TOGGLE_PREFERENCE
      );
      if (lastAccessed && $$slots[lastAccessed]) {
        const item = items.find((item) => item.slotName === lastAccessed);
        if (item) {
          activeValue = item.value;
        }
      }
    } catch {}
  };

  onMount(() => {
    updateFromLocalStorage();
    window.addEventListener(LocalStorageKeys.IDE_TOGGLE_PREFERENCE, () => {
      updateFromLocalStorage();
    });
    window.addEventListener("storage", (e: StorageEvent) => {
      if (e.key === LocalStorageKeys.IDE_TOGGLE_PREFERENCE) {
        updateFromLocalStorage();
      }
    });
  });

  const getUnusedId = (() => {
    //@ts-ignore
    let { counter } = globalThis;
    return (name: string, role: "tab" | "tabpanel") => {
      const theId = `${role}-${counter[role]++}`;
      ariaIds[role][name] = theId;
      return theId;
    };
  })();

  const switchableIndexes = items
    .filter((item) => Object.keys($$slots).includes(item.slotName))
    .map((item) => item.value);

  const switchHandler = (e: KeyboardEvent) => {
    const currentIndex = switchableIndexes.indexOf(activeValue);
    //@ts-ignore
    const siblings = e.target.parentElement.children;
    switch (e.code) {
      case "ArrowRight":
        {
          e.preventDefault();
          const willOverflow = currentIndex === switchableIndexes.length - 1;
          changeTab(
            willOverflow
              ? switchableIndexes[0]
              : switchableIndexes[currentIndex + 1]
          )();
          siblings[willOverflow ? 0 : currentIndex + 1].focus();
        }
        break;
      case "ArrowLeft":
        {
          e.preventDefault();
          const willOverflow = currentIndex === 0;
          changeTab(
            willOverflow
              ? switchableIndexes[switchableIndexes.length - 1]
              : switchableIndexes[currentIndex - 1]
          )();
          siblings[
            willOverflow ? switchableIndexes.length - 1 : currentIndex - 1
          ].focus();
        }
        break;
      case "Home":
        e.preventDefault();
        changeTab(switchableIndexes[0])();
        break;
      case "End":
        e.preventDefault();
        changeTab(switchableIndexes[switchableIndexes.length - 1])();
        break;
    }
  };
</script>

<style lang="postcss">
  article :global(p) {
    @apply mb-0;
  }
</style>

<div class="my-8 mt-0">
  <header>
    <nav>
      <ul
        class="flex flex-wrap !pl-0 !mb-0"
        role="tablist"
        on:keydown={switchHandler}
      >
        {#each items as item}
          {#if Object.keys($$slots).includes(item.slotName)}
            <li
              class="before:!hidden !m-0 !p-0"
              role="tab"
              aria-selected={item.value === activeValue}
              aria-controls={ariaIds.tabpanel[item.slotName]}
              tabindex={item.value === activeValue ? 0 : -1}
              on:click={changeTab(item.value)}
              on:focus={changeTab(item.value)}
              id={getUnusedId(item.slotName, "tab")}
            >
              <span
                class="rounded-t-2xl cursor-pointer px-4 py-2 hidden md:block {activeValue ===
                item.value
                  ? 'bg-white dark:bg-card'
                  : 'bg-sand-dark dark:bg-light-black'} transition-all duration-200"
                >{item.title}</span
              >
              <span
                class="rounded-t-2xl cursor-pointer px-4 py-2 md:hidden block {activeValue ===
                item.value
                  ? 'bg-white dark:bg-card'
                  : 'bg-sand-dark dark:bg-light-black'} transition-all duration-200"
                on:click={changeTab(item.value)}>{item.mobileTitle}</span
              >
            </li>
          {/if}
        {/each}
      </ul>
    </nav>
  </header>
  {#if $$slots.vscodebrowser}
    <article
      class={`px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card ${
        activeValue !== 1 ? "hidden" : ""
      }`}
      {...activeValue !== 1
        ? { hidden: true, "aria-hidden": "true", tabindex: -1 }
        : { hidden: false, "aria-hidden": "false", tabindex: 0 }}
      aria-labelledby={ariaIds?.tab?.vscodebrowser}
      id={getUnusedId("vscodebrowser", "tabpanel")}
      role="tabpanel"
    >
      <slot name="vscodebrowser" />
    </article>
  {/if}
  {#if $$slots.vscodedesktop}
    <article
      class={`px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card ${
        activeValue !== 2 ? "hidden" : ""
      }`}
      {...activeValue !== 2
        ? { hidden: true, "aria-hidden": "true", tabindex: -1 }
        : { hidden: false, "aria-hidden": "false", tabindex: 0 }}
      aria-labelledby={ariaIds?.tab?.vscodedesktop}
      id={getUnusedId("vscodedesktop", "tabpanel")}
      role="tabpanel"
    >
      <slot name="vscodedesktop" />
    </article>
  {/if}
  {#if $$slots.jetbrains}
    <article
      class={`px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card ${
        activeValue !== 3 ? "hidden" : ""
      }`}
      {...activeValue !== 3
        ? { hidden: true, "aria-hidden": "true", tabindex: -1 }
        : { hidden: false, "aria-hidden": "false", tabindex: 0 }}
      aria-labelledby={ariaIds?.tab?.jetbrains}
      id={getUnusedId("jetbrains", "tabpanel")}
      role="tabpanel"
    >
      <slot name="jetbrains" />
    </article>
  {/if}
  {#if $$slots.commandline}
    <article
      class={`px-4 py-4 rounded-b-2xl rounded-tr-2xl border-t-0 bg-white dark:bg-card ${
        activeValue !== 4 ? "hidden" : ""
      }`}
      {...activeValue !== 4
        ? { hidden: true, "aria-hidden": "true", tabindex: -1 }
        : { hidden: false, "aria-hidden": "false", tabindex: 0 }}
      aria-labelledby={ariaIds?.tab?.commandline}
      id={getUnusedId("commandline", "tabpanel")}
      role="tabpanel"
    >
      <slot name="commandline" />
    </article>
  {/if}
</div>
