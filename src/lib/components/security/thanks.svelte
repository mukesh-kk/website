<script>
  import Header from "../header.svelte";
</script>

<Header
  title="Thanks for your help"
  text="Big thanks the following people who responsibly disclosed their security
  findings."
  class="max-w-lg"
>
  <img
    src="/svg/icons/heart.svg"
    alt="Heart"
    class="h-10 mx-auto mb-micro"
    slot="top"
  />
  <div class="mt-x-large" slot="content">
    <h2 class="h4 border-b-[3px] inline-block border-primary border-solid">
      2022
    </h2>
    <ol class="max-w-[285px] mx-auto my-x-small">
      <li>
        <a rel="nofollow" href="https://twitter.com/AlanCao5">Alan Cao</a> from New
        York University.
      </li>
      <li>
        <a href="https://www.linkedin.com/in/0x33c0unt/"> Yusuf Kocadaş</a>.
      </li>
    </ol>
    <h2
      class="h4 mt-x-large border-b-[3px] inline-block border-primary border-solid"
    >
      2021
    </h2>
    <ol class="max-w-[285px] text-left mx-auto my-x-small">
      <li>
        <a rel="nofollow" href="https://twitter.com/Kuys_Potpot"
          >Andrei Jiroh Eugenio Halili</a
        > from Marilao.
      </li>
      <li>
        <a rel="nofollow" href="https://twitter.com/byte89">Kirill Efimov</a> from
        Snyk.
      </li>
      <li>
        <a
          rel="nofollow"
          href="https://about.gitlab.com/blog/2021/07/08/two-bugs-and-a-quick-fix-in-gitpod/"
          >Joern Schneeweisz</a
        > from GitLab.
      </li>
    </ol>
  </div>
</Header>
