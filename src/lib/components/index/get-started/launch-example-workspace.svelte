<script>
  import { projects } from "$lib/contents/home";
  import Project from "./project.svelte";
</script>

<h3>Launch an example workspace</h3>
<p>Dive into one of our example workspaces</p>
<div class="my-x-small space-y-4">
  {#each projects as project}
    <Project {project} />
  {/each}
</div>

<div class="text-base">
  <a href="/docs/introduction/getting-started">More example workspaces</a>
</div>
