<script lang="ts">
  import ThemeSwitcher from "../theme-switcher.svelte";
  import FooterLink from "./link.svelte";
  import Section from "./section.svelte";
  import Modal from "../ui-library/modal/modal.svelte";
  import CookieSettings from "../cookie-settings.svelte";

  const socialLinks = [
    {
      href: "https://twitter.com/gitpod",
      alt: "Twitter",
      icon: "/svg/brands/twitter.svg",
    },
    {
      href: "https://github.com/gitpod-io",
      alt: "GitHub",
      icon: "/svg/brands/github.svg",
    },
    {
      href: "https://www.gitpod.io/chat",
      alt: "Discord",
      icon: "/svg/brands/discord.svg",
    },
    {
      href: "https://www.developerexperience.us",
      alt: "DevX community logo",
      icon: "/svg/brands/devx.svg",
    },
  ];

  let isModalOpen: boolean = false;

  const handleClose = () => (isModalOpen = false);
</script>

<div class="pb-8 bg-card text-p-footer" data-id="footer">
  <footer
    class="py-large m-auto px-xx-small md:max-w-6xl md:py-small md:px-xx-small"
  >
    <div
      class="flex gap-x-x-small sm:gap-x-small md:gap-0 justify-between flex-wrap pb-micro md:pb-small"
    >
      <Section title="Gitpod">
        <li>
          <FooterLink href="/docs/introduction/getting-started"
            >Getting started</FooterLink
          >
        </li>
        <li>
          <FooterLink href="/cde">CDE</FooterLink>
        </li>
        <li><FooterLink href="/pricing">Pricing</FooterLink></li>
        <li><FooterLink href="/customers">Customers</FooterLink></li>
        <li><FooterLink href="/support">Support</FooterLink></li>
        <li>
          <FooterLink
            href="https://github.com/gitpod-io/gitpod/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml"
            target="_blank"
            rel="noopener">Report a bug</FooterLink
          >
        </li>
        <li>
          <FooterLink
            href="https://www.gitpodstatus.com/"
            target="_blank"
            rel="noopener">Status</FooterLink
          >
        </li>
      </Section>
      <Section title="Resources">
        <li><FooterLink href="/docs">Documentation</FooterLink></li>
        <li><FooterLink href="/community">Community</FooterLink></li>
        <li><FooterLink href="/blog">Blog</FooterLink></li>
        <li><FooterLink href="/changelog">Changelog</FooterLink></li>
        <li>
          <FooterLink href="/screencasts/getting-started-with-gitpod"
            >Screencasts</FooterLink
          >
        </li>
        <li><FooterLink href="/guides">Guides</FooterLink></li>
        <li><FooterLink href="/events">Events</FooterLink></li>
      </Section>
      <Section title="Use Cases">
        <li>
          <FooterLink href="/for/startups" class="flex items-center">
            Startups
          </FooterLink>
        </li>
        <li>
          <FooterLink href="/for/opensource" class="flex items-center"
            >Open Source</FooterLink
          >
        </li>
        <li>
          <FooterLink href="/for/enterprise" class="flex items-center"
            >Enterprises</FooterLink
          >
        </li>
        <li>
          <FooterLink href="/for/education" class="flex items-center"
            >Education</FooterLink
          >
        </li>
      </Section>
      <Section title="Compare">
        <li>
          <FooterLink href="/vs/local-development"
            >Local Development
          </FooterLink>
        </li>
        <li>
          <FooterLink href="/vs/github-codespaces"
            >GitHub Codespaces
          </FooterLink>
        </li>
        <li>
          <FooterLink href="/vs/jetbrains-space">JetBrains Space</FooterLink>
        </li>
        <!-- <li>
          <FooterLink href="/vs/coder">Coder</FooterLink>
        </li> -->
      </Section>
      <Section title="Company">
        <li><FooterLink href="/about">About</FooterLink></li>
        <li><FooterLink href="/about/team">Team</FooterLink></li>
        <li>
          <FooterLink href="/careers" highlight>Careers</FooterLink>
        </li>
        <li><FooterLink href="/contact">Contact</FooterLink></li>
        <li><FooterLink href="/media-kit">Media kit</FooterLink></li>
        <li><FooterLink href="/security">Security</FooterLink></li>
      </Section>
      <Section title="Legal">
        <li><FooterLink href="/imprint">Imprint</FooterLink></li>
        <li>
          <FooterLink href="/terms">Terms of service</FooterLink>
        </li>
        <li>
          <FooterLink href="/privacy">Privacy policy</FooterLink>
        </li>
        <li>
          <FooterLink href="/cookies">Cookie policy</FooterLink>
        </li>
        <li>
          <button class="text-left" on:click={() => (isModalOpen = true)}
            >Cookie preferences</button
          >
        </li>
      </Section>
    </div>
    <div
      class="flex flex-col-reverse items-center justify-between border-t border-solid border-divider pt-xx-small md:flex-row md:pt-x-small"
    >
      <div class="mt-micro flex flex-col items-center lg:items-start md:mt-0">
        <div>
          <div
            class="border-divider border mb-xx-small inline-flex items-center rounded-lg py-macro gap-macro px-micro"
          >
            <img
              height="30"
              width="30"
              alt="soc 2 logo"
              src="/images/footer/soc-logo.png"
            />
            <div>
              <p class="text-fine-print text-important">SOC 2 Type II</p>
              <p class="text-fine-print">Certified</p>
            </div>
          </div>
        </div>
        <p>Copyright &copy; {new Date().getFullYear()} Gitpod</p>
      </div>
      <div class="lg:self-end">
        <ThemeSwitcher />
      </div>
      <div class="flex lg:self-start space-x-macro">
        {#each socialLinks as link}
          <FooterLink
            href={link.href}
            target="_blank"
            class="hover:opacity-80"
            analytics={`{"variant":"social_media","context":"` +
              link.alt.toLowerCase() +
              `_visit"}`}
          >
            <img
              src={link.icon}
              alt={link.alt}
              height="24"
              width="24"
              class="m-2"
            />
          </FooterLink>
        {/each}
      </div>
    </div>
  </footer>
</div>

<Modal on:close={handleClose} isOpen={isModalOpen}>
  <CookieSettings {handleClose} />
</Modal>
