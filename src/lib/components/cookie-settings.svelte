<script lang="ts">
  import Card from "./ui-library/card/card.svelte";
  import Checkbox from "./ui-library/checkbox/checkbox.svelte";
  import Cookies from "js-cookie";
  import { cookies } from "$lib/constants";
  import Button from "./ui-library/button/button.svelte";
  import { onMount } from "svelte";

  export let handleClose: () => void;
  let analyticalChecked: boolean | undefined = undefined;
  let targetingChecked: boolean = false;

  const handleSave = () => {
    if (analyticalChecked) {
      Cookies.set(cookies.ANALYTICAL, "true", { expires: 365 });
      Cookies.set(cookies.VISITED, "true", { expires: 365 });
    } else {
      Cookies.set(cookies.ANALYTICAL, `${analyticalChecked}`, { expires: 365 });
      Cookies.remove(cookies.VISITED);
    }
    if (targetingChecked) {
      Cookies.set(cookies.TARGETING, "true", { expires: 365 });
    } else {
      Cookies.remove(cookies.TARGETING);
    }
    handleClose();
  };

  onMount(() => {
    analyticalChecked = Cookies.get(cookies.ANALYTICAL) === "true";
    targetingChecked = Cookies.get(cookies.TARGETING) === "true";
  });
</script>

<Card
  size="medium"
  background="white"
  class="p-xx-small md:p-small max-w-[600px] space-y-micro md:space-y-xx-small"
>
  <h2 class="h3 text-center">Cookie settings</h2>
  <div>
    <h3 class="h5 !text-base">
      <Checkbox
        label="Strictly necessary cookies"
        checked={true}
        disabled={true}
      />
    </h3>
    <p class="text-sm sm:text-base">
      These are cookies that are required for the operation of our Site and
      under our terms with you. They include, for example, cookies that enable
      you to log into secure areas of our Site or (on other sites) use a
      shopping cart or make use of e-billing services.
    </p>
  </div>
  <div>
    <h3 class="h5 !text-base">
      <Checkbox
        label="Analytical / Performance cookies"
        on:change={(e) => {
          // @ts-ignore
          if (e.target.checked) {
            analyticalChecked = true;
          } else {
            analyticalChecked = false;
          }
        }}
        checked={analyticalChecked}
      />
    </h3>
    <p class="text-sm sm:text-base">
      These allow us to recognise and count the number of visitors and to see
      how visitors move around our site when they are using it. This helps us
      improve the way our Website works, for example, by ensuring that users are
      finding what they are looking for easily.
    </p>
  </div>
  <div>
    <h3 class="h5 !text-base">
      <Checkbox
        label="Targeting / Advertising cookies"
        on:change={(e) => {
          // @ts-ignore
          if (e.target.checked) {
            targetingChecked = true;
          } else {
            targetingChecked = false;
          }
        }}
        checked={targetingChecked}
      />
    </h3>
    <p class="text-sm sm:text-base">
      These cookies record your visit to our Website, the pages you have visited
      and the links you have followed. We will use this information subject to
      your choices and preferences to make our Website and the advertising
      displayed on it more relevant to your interests. We may also share this
      information with third parties for this purpose.
    </p>
  </div>
  <p class="text-sm sm:text-base">
    For more information on Cookies, please visit our <a href="/cookies"
      >Cookie Policy</a
    >.
  </p>
  <div>
    <Button variant="primary" on:click={handleSave}>Save</Button>
  </div>
</Card>
