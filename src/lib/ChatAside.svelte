<!-- SCRIPTS /////////////////////////////////////////////////////////////////// -->
<script>
  export let openChatModal;
</script>

<!-- MARKUP //////////////////////////////////////////////////////////////////// -->
<aside id="chat-aside" >
  <button on:click={openChatModal} type="button">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Live chat with us</title><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
  </button>
</aside>

<!-- STYLES //////////////////////////////////////////////////////////////// -->
<style>

/* CONFIGURATION 1 */
#chat-aside {
  display: none;
}

/* CONFIGURATION 2 */
@media only screen and (min-width: 1200px) {

  #chat-aside {
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.4rem;
    border-radius: 0.3rem;
    background-color: var(--color1);
    border: 0.1rem solid var(--color2);
  }

  #chat-aside button {
    width: 100%;
    height: 100%;
  }
  
  #chat-aside svg {
    width: 100%;
    height: 100%;
  }
}
</style>