<script lang="ts">
  import { newsArticles } from "$lib/contents/about";
</script>

<div class="header max-w-4xl my-small lg:my-44 mx-auto">
  <h2 class="h3 text-center">Gitpod in the news</h2>
  <ul
    class="grid grid-cols-2 gap-micro md:gap-y-xx-small md:gap-x-small mt-xx-small"
  >
    {#each newsArticles as { href, img }}
      <li>
        <a
          class="p-micro flex justify-center items-center h-full bg-card rounded-2xl hover:bg-white dark:hover:bg-black focus:bg-white dark:focus:bg-black"
          {href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="inline h-8 dark:filter dark:invert"
            src={img.src}
            alt={img.alt}
            height="40"
          />
        </a>
      </li>
    {/each}
  </ul>
</div>
