---
section: languages
title: Languages
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import PopularLanguages from "$lib/components/docs/languages/popular-languages.svelte"
  import RemainingLanguages from "$lib/components/docs/languages/remaining-languages.svelte"
</script>

# Languages

Gitpod is a very flexible tool and can be configured with many languages.

<PopularLanguages />

---

<RemainingLanguages />
