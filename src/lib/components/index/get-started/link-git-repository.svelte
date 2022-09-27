<script lang="ts">
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<h3>Connect Git repository</h3>
<p class="max-w-md mx-auto">
  Select a Git provider to start with an existing project from any Git context.
</p>
<div class="inline-flex flex-col my-large space-y-4">
  <LinkButton
    href="https://gitpod.io/workspaces/"
    variant="unstyled"
    size="large"
    class="bg-[#5e48ba] text-white dark:text-important hover:text-white focus:text-white active:text-white hover:opacity-90 focus:opacity-90 active:opacity-90 flex items-center"
  >
    <svg
      class="h-7 w-7 mr-micro"
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitLab</title>
      <path
        d="m28.592 11.084-.04-.104L24.593.65A1.03 1.03 0 0 0 23.57.003a1.06 1.06 0 0 0-.596.223 1.06 1.06 0 0 0-.35.533l-2.673 8.175H9.132L6.46.76a1.039 1.039 0 0 0-.352-.535A1.06 1.06 0 0 0 4.898.16a1.04 1.04 0 0 0-.408.49L.525 10.975l-.04.104a7.349 7.349 0 0 0 2.438 8.493l.014.011.036.026 6.029 4.514 2.982 2.258 1.817 1.371a1.221 1.221 0 0 0 1.477 0l1.817-1.371 2.983-2.258 6.065-4.541.015-.013a7.352 7.352 0 0 0 2.434-8.484Z"
        fill="#fff"
      /></svg
    >
    Continue with GitLab
  </LinkButton>
  <LinkButton
    href="https://gitpod.io/workspaces/"
    variant="unstyled"
    size="large"
    class="bg-important text-white dark:text-black flex items-center hover:text-white focus:text-white active:text-white hover:bg-less-important focus:opacity-90 active:opacity-90 dark:hover:bg-sand-dark dark:hover:opacity-80"
  >
    <svg
      class="h-7 w-7 mr-micro"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub Octocat</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.57.5a14.374 14.374 0 00-9.442 3.54 14.947 14.947 0 00-4.94 8.946A15.133 15.133 0 002.106 23.07a14.615 14.615 0 007.862 6.406c.733.137.992-.329.992-.721v-2.528c-4.065.903-4.923-1.999-4.923-1.999a3.97 3.97 0 00-1.617-2.181c-1.314-.913.107-.913.107-.913.46.067.9.24 1.285.505.386.265.707.617.94 1.029.197.366.464.688.784.949a3.047 3.047 0 003.45.292c.057-.751.374-1.457.894-1.99-3.234-.374-6.63-1.652-6.63-7.3a5.82 5.82 0 011.493-3.989 5.529 5.529 0 01.143-3.933s1.224-.402 4.002 1.524a13.49 13.49 0 017.291 0c2.779-1.926 3.994-1.524 3.994-1.524.536 1.233.6 2.627.179 3.906a5.82 5.82 0 011.492 3.988c0 5.713-3.404 6.963-6.648 7.3.348.358.617.787.788 1.26.17.472.24.976.204 1.479v4.079c0 .484.26.858 1 .712a14.623 14.623 0 007.752-6.43 15.134 15.134 0 001.87-10.019 14.949 14.949 0 00-4.89-8.892A14.377 14.377 0 0014.57.5z"
        fill="#F9F9F9"
        class="fill-card dark:fill-black"
      />
    </svg>
    Continue with GitHub
  </LinkButton>
  <LinkButton
    size="large"
    variant="unstyled"
    href="https://gitpod.io/workspaces/"
    class="bg-[#265583] text-white dark:text-important flex items-center hover:text-white focus:text-white active:text-white hover:opacity-90 focus:opacity-90 active:opacity-90"
  >
    <svg
      class="h-7 w-7 mr-micro"
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Bitbucket</title>
      <path
        d="M1.348.9h-.01a.841.841 0 0 0-.827.972L4.065 23.45c.091.543.563.946 1.114.95h17.053a.84.84 0 0 0 .837-.703l3.554-21.821a.841.841 0 0 0-.826-.971h-.011L1.348.9Zm14.968 15.596h-5.443l-1.474-7.7h8.236l-1.32 7.7Z"
        fill="#F9F9F9"
      /><path
        d="M25.493 8.797h-7.859l-1.318 7.7h-5.443l-6.427 7.627c.204.177.464.275.733.277h17.057a.84.84 0 0 0 .837-.704l2.42-14.9Z"
        fill="url(#a-bitbucket)"
      /><defs
        ><linearGradient
          id="a-bitbucket"
          x1="27.31"
          y1="10.953"
          x2="14.323"
          y2="21.089"
          gradientUnits="userSpaceOnUse"
          ><stop stop-color="#58B19F" /><stop
            offset="1"
            stop-color="#fff"
          /></linearGradient
        ></defs
      ></svg
    >

    Continue with Bitbucket
  </LinkButton>
  <!-- <a href="#" class="link--light-grey">Third-party providers ↗</a> -->
</div>
<p class="text-large">
  Or prefix any GitLab, GitHub or Bitbucket URL with
  <br />
  <span
    class="text-dark-grey inline-block px-micro mt-macro bg-tertiary rounded-xl"
  >
    gitpod.io/#
  </span>
</p>
