<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------
  import { onMount } from "svelte";
  import page from "./scripts/page.js";

  // ELEMENT / COMPONENT REFERENCES --------------------------
  let splashPage;

  // PROPS -----------------------------------------------------
  export let pageExitDuration;

  // RUN SCRIPTS ----------------------------------------------
  const pageExit = page();

  // LIFECYCLE ----------------------------------------------
  onMount(()=> {
    gsap.set(".rects", {transformOrigin: "50% 50%", strokeWidth: 10});
    gsap.to(".rects", {
      duration: 20,
      rotate: 360,
      repeat: -1,
      ease: "linear",
    });
  });
</script>

<!-- MARKUP //////////////////////////////////////////////////// -->
<div bind:this={splashPage}>
  <h1>DREEKO</h1>
  <p>Web Development &middot Design &middot Animation</p>
  <a on:click|preventDefault={()=> pageExit(splashPage, "loading-screen", pageExitDuration)} href="">Enter</a>
  <svg>
    <rect class="rects" x="0%" y="0%" />
    <rect class="rects" x="50%" y="0%" />
    <rect class="rects" x="0%" y="50%" />
    <rect class="rects" x="50%" y="50%" />
    <rect class="rects" x="25%" y="25%" />
  </svg>
</div>

<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: var(--vph);
    row-gap: 1.5rem;
    transition: opacity var(--page-exit-duration) ease-out;
  }

  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity:1;}
  }

  svg {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    animation: fade-in 5s ease-in forwards;
  }

  h1 {
    font-size: 3rem;
    opacity: 0;
    animation: fade-in 3s 2s ease-in forwards;
  }

  p {
    font-size: 1.3rem;
    opacity: 0;
    animation: fade-in 3s 4s ease-in forwards;
  }

  a {
    border: 0.1rem solid var(--color2);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    background-color: hsla(0, 100%, 50%, 0.5);
    height: 2rem;
    opacity: 0;
    animation: fade-in 3s 6s ease-in forwards;
    transition-property: background-color, transform, outline;
    transition-duration: 1s;
    transition-timing-function: ease-out;
    outline: 0.1rem solid transparent;
  }

  a:hover, a:focus {
    background-color: hsl(220, 100%, 10%);
    transform: scale(1.3);
    outline: 0.3rem solid hsl(220, 100%, 10%);
  }

  .rects {
    width: 50%;
    height: 50%;
    fill: hsla(0, 100%, 50%, 0.3);
    stroke:hsla(0, 100%, 50%, 0.3);
  }
  svg .rects:nth-last-child(1) {
    fill:hsla(0, 100%, 50%, 0.5)
  }
</style>