<!-- SCRIPTS ////////////////////////////////////////////////////////////////// -->
<script>
  export let openSiteMenuModal;
  export let openLogInModal;
  export let openSocialMediaModal;
</script>

<!-- MARKUP ///////////////////////////////////////////////////////////////// -->
<header>

  <div id="site-header-area1">
    <h1>Main Header</h1>
    <p>Doing the unexpected...over and over</p>
  </div>

  <nav id="site-header-area2">
    <ul>
      <li>
        <a href="" >Home</a>
      </li>
      <li>
        <a href="" >About</a>
      </li>
      <li>
        <a href="" >Shop</a>
      </li>
      <li>
        <a href="" >Resources</a>
      </li>
      <li>
        <a href="" >Help</a>
      </li>
      <li>
        <a href="" >Contact</a>
      </li>
    </ul>
  </nav>

  <ul id="site-header-area3">
    <li>
      <form>
        <label class="center icon-gap" for="search">
          <input id="search" type="search" name="search" />
          <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Search</title>
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/>
          </svg>
        </label>
        <button class="hidden-submit" type="submit" tabindex="-1"></button>
      </form>
    </li>
    <li>
      <button class="center icon-gap" type="button">
        <svg class="checkout-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/>
        </svg>
        <output>( 1 )</output>
      </button>
    </li>
    <li>
      <button on:click={openSocialMediaModal} class="center icon-gap" type="button">
        Follow
        <svg class="follow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
        </svg>
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

  <div id="site-header-area4">
    <button on:click={openSiteMenuModal} class="center" type="button">
      <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <title>Menu</title>
        <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
      </svg>
    </button>
  </div>
  
</header>

<!-- STYLES /////////////////////////////////////////////////////////////////// -->
<style>

header {
  height: 7.5rem;
  border-bottom: 0.2rem solid var(--color2);
  position: relative;
}

header > * {
  position: absolute;
}

/* CONFIGURATION 1 ////////////////////////// */
#site-header-area1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  height: 100%;
  align-items: flex-start;
  gap: 0.7rem;
  padding-left: 1rem;
}

#site-header-area1 h1 {
  font-size: 2rem;
}

#site-header-area1 p, #site-header-area2, #site-header-area3 {
  display: none;
}

#site-header-area4 {
  right: 0%;
  height: 100%;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

#site-header-area4 .menu-icon {
  width: 2rem;
}

/* CONFIGURATION 2 //////////////////////////////////// */
@media only screen and (min-width: 380px) {
  #site-header-area1 p {
    display: block;
    font-style: italic;
    font-size: 0.9rem;
  }
}

/* CONFIGURATION 3 /////////////////////// */
@media only screen and (min-width: 892px) {

  #site-header-area1 {
    width: 100%;
    height: initial;
    top: 12%;
    align-items: center;
    gap: 0.5rem;
  }
  
  #site-header-area2 {
    display: block;
    bottom: 0%;
    width: 100%;
  }
  
  #site-header-area2 ul {
    gap: 3rem;
    display: flex;
    justify-content: space-evenly;
    padding: 0 5rem;
  }

  #site-header-area3 {
    display: flex;
    font-size: 0.85rem;
    gap: 1rem;
    right: 1.5rem;
    top: 10%;
  }

  #site-header-area3 form {
    padding-right: 0.5rem;
  }
  
  #site-header-area3 .search-icon {
    width: 1.1rem;
  }
  
  #site-header-area3 input[type="search"] {
    transform: scale(0);
    border: none;
    transform-origin: 100% 50%;
    transition: transform 0.5s ease-out;
    background-color: transparent;
    margin-right: 0.5rem;
  }
  
  #site-header-area3 input[type="search"]:focus {
    transform: scale(1);
    border: 0.1rem solid black;
    border-radius: 0.2rem;
  }
  
  #site-header-area3 input {
    font-size: 1.2rem;
    font-weight: 700;
  }
  
  #site-header-area3 form button[type="submit"] {
    position: absolute;
  }
  
  #site-header-area3 .checkout-icon {
    width: 0.9rem;
  }
  
  #site-header-area3 .follow-icon {
    width: 1rem;
  }
  
  #site-header-area3 .user-icon {
    width: 1.1rem;
  }

  #site-header-area4 {
    display: none;
  }
}

/* CONFIGURATION 4 /////////////////////// */
@media only screen and (min-width: 1250px) {

  #site-header-area1 {
    top: 0%;
    width: 35%;
    height: 100%;
    align-items: flex-start;
    gap: 0.7rem;
    padding-left: 1rem;
  }
  
  #site-header-area2 {
    display: block;
    width: initial;
    right: 3%;
    bottom: 0%;
  }
  
  #site-header-area2 ul {
    padding: 0;
  }
}

</style>