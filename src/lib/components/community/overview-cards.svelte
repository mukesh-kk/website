<script lang="ts">
  import Card from "$lib/components/ui-library/card";
  import { overviewCards } from "$lib/contents/community/index";
</script>

<div>
  <img
    class="object-cover dark:hidden"
    src="/images/community/squad.png"
    alt="4 3d modeled characters representing a squad of community heroes"
  />
  <img
    class="hidden dark:block object-cover"
    src="/images/community/squad-dark.png"
    alt="4 3d modeled characters representing a squad of community heroes"
  />
  <div class="mt-small md:mt-xx-large">
    <ul class="flex justify-center flex-wrap gap-micro">
      {#each overviewCards as card}
        <li>
          <Card
            class="lg:px-x-small py-xx-small px-xx-small lg:py-small max-w-sm"
            size="small"
          >
            <h2 class="h4 !mb-micro">{card.title}</h2>
            <p>
              {@html card.text}
            </p>
          </Card>
        </li>
      {/each}
    </ul>
  </div>
</div>
