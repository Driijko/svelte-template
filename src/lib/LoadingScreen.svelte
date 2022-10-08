<!-- SCRIPTS ///////////////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS ---------------------------------------------------------
  import { onMount } from "svelte";
  import page from "./scripts/page.js";

  // PROPS ------------------------------------------------------------
  export let pageExitDuration;

  // ELEMENT/COMPONENT REFERENCES -------------------------------------------
  let loadingScreen;

  // RUN SCRIPTS ---------------------------------------------------------
  const pageExit = page();

  // LIFECYCYLE ---------------------------------------------------------
  onMount(()=> {
    window.addEventListener("load", ()=> pageExit(loadingScreen, "splash", pageExitDuration));
    return ()=> {
      window.removeEventListener("load", ()=> pageExit(loadingScreen, "splash", pageExitDuration));
    };
  });

</script>

<!-- MARKUP /////////////////////////////////////////////////////////////// -->
<div bind:this={loadingScreen} id="loading-screen">
  <p>Loading...</p>
  <div class="animation"></div>
  <div class="animation"></div>
</div>

<!-- STYLE //////////////////////////////////////////////////////////////// -->
<style>
  #loading-screen {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: var(--vph);
    background-color: var(--color2);
    transition: opacity var(--page-exit-duration) ease-out;
    z-index: 1;
  }
  @keyframes rotate1 {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  @keyframes rotate2 {
    from {transform: rotate(0deg);}
    to {transform: rotate(-360deg);}
  }
  .animation {
    position: absolute;
    width: 60%;
    height: 20%;
    z-index: -1;
    border-radius: 50%;
  }
  #loading-screen div:nth-of-type(1) {
    animation: rotate1 5s linear infinite;
    background-color: hsla(220, 100%, 50%, 0.5);
  }
  #loading-screen div:nth-of-type(2) {
    animation: rotate2 5s linear infinite;
    background-color: hsla(300, 100%, 50%, 0.5);
  }
</style>