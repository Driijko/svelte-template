<!-- SCRIPTS /////////////////////////////////////////////////////////// -->
<script>
  export let closeModal;
  export let open = false;
  export let openLogInModal;
</script>

<!-- MARKUP ///////////////////////////////////////////////////////// -->
<dialog id="site-menu-modal" class="covering-modal" open={open}>

  <div on:click={closeModal} class="site-menu-modal-closer background"></div>

  <div class="container">
    <section id="site-menu">

      <h3 id="site-menu-area1">Menu</h3>

      <form id="site-menu-area2">
        <label class="center icon-gap" for="search">
          <input id="search" type="search" name="search" />
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
          </svg>
        </label>
        <button class="hidden-submit" type="submit" tabindex="-1"></button>
      </form>

      <ul id="site-menu-area3">
        <li>
          <button class="center icon-gap" type="button">
            <svg class="checkout-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <title>Checkout shopping order</title>
              <path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/>
            </svg>
            <output>( 1 )</output>
          </button>
        </li>
        <li>
          <button on:click={openLogInModal} class="center icon-gap" type="button">
            <svg class="user-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"/>
            </svg>
            <span>Log-In</span>
          </button>
        </li>
      </ul>

      <nav id="site-menu-area4">
        <ul>
          <li>
            <a class="center" href="" >Home</a>
          </li>
          <li>
            <a class="center" href="" >About</a>
          </li>
          <li>
            <a class="center" href="" >Shop</a>
          </li>
          <li>
            <a class="center" href="" >Resources</a>
          </li>
          <li>
            <a class="center" href="" >Help</a>
          </li>
          <li>
            <a class="center" href="" >Contact</a>
          </li>
        </ul>
      </nav>

      <ul id="site-menu-area5">
        <li>
          <a class="center" href="">
            <svg class="facebook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <title>Facebook</title>
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
          </a>
        </li>
        <li>
          <a class="center" href="">
            <svg class="twitter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <title>Twitter</title>
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/>
              </svg>
          </a>
        </li>
        <li>
          <a class="center" href="">
            <svg class="instagram-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <title>Instagram</title>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          </a>
        </li>
        <li>
          <a class="center" href="">
            <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <title>Youtube</title>
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
          </a>
        </li>
        <li>
          <a class="center" href="">
            <svg class="linked-in-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <title>Linked-In</title>
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
              </svg>
          </a>
        </li>
        <li>
          <a class="center" href="">
            <svg class="tik-tok-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <title>Tik-Tok</title>
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
          </a>
        </li>
      </ul>

      <button id="site-menu-area6" on:click={closeModal} class="modal-closer-button" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <title>Close pop up</title>
          <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"/></svg>
      </button>

    </section>
  </div>
</dialog>

<!-- STYLE /////////////////////////////////////////////////////////////// -->
<style>
#site-menu {
  width: 320px;
  height: 480px;
  border: 0.1rem solid var(--color2);
  background-color: var(--color1);
}

#site-menu-area1 {
  font-size: 2rem;
  height: 8.3%;
  border-bottom: 0.1rem solid black;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
} 

#site-menu-area2 {
  padding: 1rem 0;
}

#site-menu-area2 label {
  display: flex;
  gap: 1rem;
}

#site-menu-area2 input[type="search"] {
  min-height: 0;
  width: 70%;
  font-size: 1.5rem;
}

#site-menu-area2 svg {
  width: 1.3rem;
}

#site-menu-area3 {
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 8.3%;
}
#site-menu-area3 li {
  width: 30%;
  height: 100%;
}

#site-menu-area3 button {
  border: 1px solid black;
  width: 100%;
  min-height: 0;
  height: 100%;
}

#site-menu-area3 .checkout-icon {
  width: 1.15rem;
}

#site-menu-area3 .user-icon {
  width: 1.4rem;
}

#site-menu-area4 {
  height: 60.7%;
}

#site-menu-area4 ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.2% 0;
  height: 100%;
}

#site-menu-area4 li {
  height: 15.6%;
}

#site-menu-area4 li a {
  height: 100%;
  min-height: 0;
  font-size: 1.3rem;
}

#site-menu-area5 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  height: 9%;
  width: 100%;
}

#site-menu-area5 li {
  height: 100%;
  width: 15%;
}

#site-menu-area5 a {
  min-height: 0;
  min-width: 0;
  height: 100%;
  width: 100%;
}

#site-menu-area5 .facebook-icon {
  width: 1.4rem;
}

#site-menu-area5 .twitter-icon {
  width: 1.2rem;
}

#site-menu-area5 .instagram-icon {
  width: 1.4rem;
}

#site-menu-area5 .youtube-icon {
  width: 1.8rem;
}

#site-menu-area5 .linked-in-icon {
  width: 1.4rem;
}

#site-menu-area5 .tik-tok-icon {
  width: 1.2rem;
}

#site-menu-area6 {
  min-height: 0;
  height: 8.3%;
}

@media only screen and (min-width: 600px) {
  #site-menu {
    width: 416px;
    height: 624px;
  }
}
</style>