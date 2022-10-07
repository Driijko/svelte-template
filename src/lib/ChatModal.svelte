<!-- SCRIPTS ///////////////////////////////////////////////////////////////// -->
<script>

  // PROPS ///////////////////////
  export let open = false;
  export let closeModal;

  // LOCAL STATE /////////////////////
  let messages = [];

  // EVENT HANDLERS //////////////////
  function handleChange(e) {
    messages.push(e.target.value);
    messages = messages;
    e.target.value = "";
  }
  
</script>

<!-- MARKUP ////////////////////////////////////////////////////////////////// -->
<dialog id="chat-modal" open={open}>
  <section>
    <h3>Main Header</h3>
    <p>Chat us up!</p>
    <div id="chat-area">
      {#each messages as message}
        <div class="user-message-container">
          <p class="user-message">
            {message}
          </p>
        </div>
      {/each}
    </div>
    <form>
      <input on:change={handleChange} id="live-chat-user-input" type="text" maxlength="200" name="message" placeholder="Send us a message..." />
      <button on:click|preventDefault class="hidden-submit" type="submit"></button>
    </form>
    <button on:click={closeModal} type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <title>Close pop up</title>
        <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
    </button>
  </section>
</dialog>

<!-- STYLE ///////////////////////////////////////////////////////////////////// -->
<style>
  #chat-modal {
  position: fixed;
  width: 320px;
  height: 480px;
  bottom: 0;
  right: 0;
  color: var(--color1);
}

#chat-modal section {
  height: 100%;
  position: relative;
}

#chat-modal h3 {
  font-size: 1.5rem;
  padding: 0.3rem;
}

#chat-modal p {
  padding: 0.4rem;
}

#chat-area {
  width: 100%;
  height: 77%;
  overflow-y: scroll;
  scrollbar-width: none; 
  -ms-overflow-style: none;
}

#chat-area::-webkit-scrollbar {
  display: none;
}

.user-message-container {
  padding-right: 0.5rem;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
}

.user-message {
  max-width: 80%;
  text-align: right;
  background-color: aqua;
  font-size: 1rem;
  border-radius: 0.2rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-word;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  text-overflow: ellipsis;
}

#chat-modal form {
  padding-left: 1.7rem;
}

#chat-modal input {
  width: 90%;
  font-size: 1.2rem;
}

#chat-modal input::placeholder {
  font-size: 1rem;
}

#chat-modal button {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  padding: 0.2rem 0.3rem;
  line-height: 0;
}

#chat-modal button svg {
  width: 1rem;
}

@media only screen and (min-width:600px) {
  #chat-modal {
    bottom: 1rem;
    right: 1rem;
    width: 17rem;
    height: 28rem;
  }

  #chat-modal form {
    padding-left: 1rem;
  }
  
  #chat-modal input {
    width: 94%;
  }
}
</style>