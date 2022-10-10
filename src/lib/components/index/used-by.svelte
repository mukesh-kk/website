<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import Section from "../section.svelte";
  import Brands from "./brands.svelte";
  let clazz = "";
  export { clazz as class };
  export let isCard: boolean = true;
  export let isCustomerStoriesLinkShown: boolean = true;
  import { brands as brandsDefault } from "$lib/contents/home";
  import type { Brand } from "$lib/types/brand";
  export let brands: Brand[] = brandsDefault;

  export let title: string;
</script>

{#if isCard}
  <Card size="medium" class="shadow-normal">
    <Section class="text-center {clazz}" {...$$restProps}>
      <h2 class="h3">{title}</h2>
      <Brands {isCustomerStoriesLinkShown} {brands} />
    </Section>
  </Card>
{:else}
  <Section class="text-center {clazz}" {...$$restProps}>
    <h2 class="h3">{title}</h2>
    <Brands {isCustomerStoriesLinkShown} {brands} />
  </Section>
{/if}
