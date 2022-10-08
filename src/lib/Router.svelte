<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS --------------------------------------------
  import site from "./scripts/site.js";

  // IMPORT COMPONENTS ------------------------------------------
  import Splash from "./Splash.svelte";
  import LoadingScreen from "./LoadingScreen.svelte";

  // LOCAL STATE ------------------------------------------------
  let page = "loading-screen";
  let pageExitDuration = 3000;

  // RUN SCRIPTS -----------------------------------------------
  site(pageExitDuration);

  // EVENT HANDLERS --------------------------------------------
  function handlePageLink(e) {
    page = e.detail.page;
  }

</script>

<!-- MARKUP --------------------------------------------------- -->
<div>
  {#if page === "loading-screen"}
    <LoadingScreen 
      on:page-link={handlePageLink} 
      {pageExitDuration}
    />
  {:else if page === "splash"}
    <Splash />
  {/if}
</div>