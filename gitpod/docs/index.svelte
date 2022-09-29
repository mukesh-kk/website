<script context="module">
  export const prerender = true;
  export const load = () => {
    return {
      status: 301,
      redirect: "/docs/introduction",
    };
  };
</script>
