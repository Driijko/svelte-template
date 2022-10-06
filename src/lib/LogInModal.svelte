<!-- SCRIPTS //////////////////////////////////////////////////////////////// -->
<script>
  export let open = false;
  export let closeModal;
</script>

<!-- MARKUP /////////////////////////////////////////////////////////////// -->
<dialog id="log-in-modal" class="covering-modal" open={open}>
  <div on:click={closeModal} class="background"></div>
  <div class="container">
    <section>

      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/></svg><br/>
        Log-In
      </h3>

      <form>
        <div>
          <label>
            User Name:<br/>
            <input type="text" name="user-name" required />
          </label>
        </div>
        <div>
          <label>
            Password:<br/>
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <button type="submit">Log-In</button>
        </div>
      </form>

      <div class="link-area">
        <p>
          Don't have an account?<br/>
          <a href="">Create an account.</a>
        </p>
        <p>
          Forgot your password?<br/>
          <a href="">Reset your password.</a>
        </p>
      </div>

      <button on:click={closeModal} class="modal-closer-button" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <title>Close pop up</title>
          <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
      </button>

    </section>
  </div>
</dialog>

<!-- STYLE //////////////////////////////////////////////////////////////// -->
<style>
#log-in-modal section {
  width: 30rem;
  height: 30rem;
  background-color: var(--color1);
  border: 0.3rem solid var(--color2);
  border-radius: 0.5rem;
}

#log-in-modal h3 {
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
}

#log-in-modal h3 svg {
  width: 3rem;
}

#log-in-modal form {
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  line-height: 1.4;
}

#log-in-modal form input {
  font-size: 1.2rem;
}

#log-in-modal .link-area  {
  font-size: 0.9rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: space-around;
  line-height: 1.5;
}
</style>
