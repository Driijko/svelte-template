<!-- SCRIPTS /////////////////////////////////////////////////////// -->
<script>
  export let openChatModal;
</script>

<!-- MARKUP //////////////////////////////////////////////////////// -->
<footer id="site-footer">

  <div id="site-footer-areas">

    <div id="site-footer-text-header">
      <h1>Main Header</h1>
      <p>Doing the unexpected...over and over</p>
    </div>

    <section id="site-footer-live-chat">
      <h3>Live Chat</h3>
      <button on:click={openChatModal} class="center" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Live chat with us</title><path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"/></svg>
      </button>
    </section>

    <section id="site-footer-contact">
      <h3>Contact</h3>
      <address>
        <ul>
          <li>
            <a href="" class="center">
              <div class="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <title>Physical location</title>
                  <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></svg>
              </div>
              <p>10439 - 86 ave,<br /> Edmonton,<br/> T6E-2M4</p>
            </a>
          </li>
          <li>
            <a href="tel:" class="center">
              <div class="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>Telephone number</title>
                  <path d="M18.92 351.2l108.5-46.52c12.78-5.531 27.77-1.801 36.45 8.98l44.09 53.82c69.25-34 125.5-90.31 159.5-159.5l-53.81-44.04c-10.75-8.781-14.41-23.69-8.974-36.47l46.51-108.5c6.094-13.91 21.1-21.52 35.79-18.11l100.8 23.25c14.25 3.25 24.22 15.8 24.22 30.46c0 252.3-205.2 457.5-457.5 457.5c-14.67 0-27.18-9.968-30.45-24.22l-23.25-100.8C-2.571 372.4 5.018 357.2 18.92 351.2z"/></svg>
              </div>
              <p>123-456-7890</p>
            </a>
          </li>
          <li>
            <a href="mailto:" class="center">
              <div class="center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
              </div>
              <p>info@mysite.com</p>
            </a>
          </li>
          <li>
            <ul class="opening-hours">
              <li>Mon - Fri: <span>10am - 5pm</span></li>
              <li>Sat / Sun: <span>12pm - 4pm</span></li>
            </ul>
          </li>
        </ul>
      </address>
    </section>

    <div id="site-footer-quick-links">
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Resources</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>

    <section id="site-footer-social-media">
      <h3>
        Follow
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
      </h3>
      <ul>
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
    </section>

    <section id="site-footer-newsletter">
      <h3>Get the Latest News</h3>
      <form>
        <label for="email">
          <span>Email:</span><br/>
          <input id="email" type="email" name="email" required />
        </label><br/>
        <div class="button-container">
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </section>

  </div>

  <div id="site-footer-bottom">
    &copy Dreeko 2022.
  </div>

</footer>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
#site-footer-areas > * {
  display: flex;
  border: 0.1rem solid var(--color2);
}

#site-footer ul {
  display: flex;
}

/* CONFIGURATION 1 /////////////////////////// */
#site-footer-areas > * {
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
}

#site-footer-areas h1 {
  font-size: 1.7rem;
}

#site-footer-areas h3 {
  font-size: 1.5rem;
}

/* TEXT HEADER */
#site-footer-text-header {
  align-items: center;
  gap: 0.5rem;
}

#site-footer-text-header p {
  font-size: 0.9rem;
  font-style: italic;
}

/* LIVE CHAT */
#site-footer-live-chat svg {
  width: 2rem;
}

/* CONTACT */
#site-footer-contact {
  gap: 1rem;
}

#site-footer-contact address {
  height: 100%;
}

#site-footer-contact address ul {
  flex-direction: column;
  line-height: 1.2;
  gap: 1.5rem;
  height: 100%;
}

#site-footer-contact address > ul > li {
  height: 100%;
}

#site-footer-contact address a {
  text-align: center;
  gap: 0.7rem;
  height: 100%;
}

#site-footer-contact address a div {
  width: 20%;
}

#site-footer-contact address a p {
  width: 80%;
  text-align: center;
  font-size: 0.9rem;
}

#site-footer-contact address .opening-hours {
  gap: 0.5rem;
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
}

#site-footer-contact address .opening-hours span {
  padding-left: 0.5rem;
}

/* QUICK LINKS  */
#site-footer-quick-links {
  height: 20rem;
}
#site-footer-quick-links ul {
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 1rem 0 2rem 0
}

/* SOCIAL MEDIA  */
#site-footer-social-media h3 svg {
  width: 1rem;
}

#site-footer-social-media ul {
  gap: 4vw;
}

#site-footer-social-media .facebook-icon {
  width: 1.6rem;
}

#site-footer-social-media .twitter-icon {
  width: 1.5rem;
}

#site-footer-social-media .instagram-icon {
  width: 1.7rem;
}

#site-footer-social-media .youtube-icon {
  width: 2rem;
}

#site-footer-social-media .linked-in-icon {
  width: 1.5rem;
}

#site-footer-social-media .tik-tok-icon {
  width: 1.5rem;
}

/* NEWSLETTER */
#site-footer-newsletter {
  line-height: 2;
}

#site-footer-newsletter form {
  width: 100%;
  text-align: center;
}

#site-footer-newsletter span {
  padding-right: 0.5rem;
  margin-bottom: 1rem;
}

#site-footer-newsletter input {
  width: 70%;
  max-width: 15rem;
  font-size: 1.2rem;
}

#site-footer-newsletter .button-container {
  margin-top: 1rem;
  text-align: center;
}

#site-footer-newsletter button {
  border-width: 0.09rem;
  padding: 0.3rem;
  border-radius: 0.2rem;
}

/* FOOTER BOTTOM  */
#site-footer-bottom {
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
}

/* CONFIGURATION 2 ///////////////////////////////// */
@media only screen and (min-width: 1100px) {

  #site-footer-live-chat,
  #site-footer-contact,
  #site-footer-contact address > ul,
  #site-footer-quick-links ul,
  #site-footer-social-media,
  #site-footer-newsletter {
    flex-direction: row;
  }

  /* LIVE CHAT */
  #site-footer-live-chat {
    justify-content: center;
    gap: 2rem;
  }

  /* CONTACT SECTION */
  #site-footer-contact {
    padding: 1rem;
    gap: 2rem;
    height: 8rem;
  }

  #site-footer-contact address {
    width: 100%;
  }

  #site-footer-contact address > ul {
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  #site-footer-contact address > ul li {
    width: 10rem;
  }

  #site-footer-contact address a {
    flex-direction: column;
  }

  #site-footer-contact address > ul div {
    width: 10%;
  }

  #site-footer-contact address .opening-hours li {
    font-size: 0.9rem;
    width: 100%;
  }

  /* QUICK LINKS */
  #site-footer-quick-links {
    height: 7rem;
  }
  #site-footer-quick-links ul {
    width: 100%;
    justify-content: space-evenly;
    padding: 0;
  }

  /* SOCIAL MEDIA */
  #site-footer-social-media {
    height: 5rem;
  }

  #site-footer-social-media ul {
    width: 85%;
    justify-content: center;
    align-items: center;
    gap: 4rem;
  }

  /* NEWSLETTER */
  #site-footer-newsletter {
    display: flex;
    align-items: center;
    gap: 3rem;
    padding: 0.5rem 1rem;
    height: 5rem;
  }

  #site-footer-newsletter form {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 65%;
    justify-content: flex-start;
  }

  #site-footer-newsletter br {
    display: none;
  }

  #site-footer-newsletter .button-container {
    margin: 0;
  }
}

/* CONFIGURATION 4 */
@media only screen and (min-width: 1415px) {
  #site-footer {
    height: 24rem;
  }

  #site-footer-areas {
    display: flex;
    flex-direction: row;
    height: 92%;
  }

  #site-footer-areas > * {
    width: 25%;
  }

  #site-footer-live-chat,
  #site-footer-contact,
  #site-footer-contact address > ul,
  #site-footer-quick-links ul,
  #site-footer-social-media,
  #site-footer-social-media ul,
  #site-footer-newsletter,
  #site-footer-newsletter form {
    flex-direction: column;
  }

  #site-footer-contact,
  #site-footer-social-media,
  #site-footer-newsletter {
    height: initial;
  }

  /* TEXT HEADER */
  #site-footer-text-header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
  }

  /* CONTACT  */
  #site-footer-contact {
    gap: 1.4rem;
  }

  #site-footer-contact address a {
    flex-direction: row;
  }

  #site-footer-quick-links {
    height: 100%;
  }

  /* SOCIAL MEDIA */
  #site-footer-social-media ul {
    gap: 1.2rem;
  }

  /* NEWSLETTER */
  #site-footer-newsletter form {
    align-items: center;
    gap: 2rem;
    width: 80%;
    text-align: left;
  }

  #site-footer-newsletter form label {
    max-width: 15rem;
  }

  #site-footer-newsletter input {
    width: 100%;
  }

  #site-footer-newsletter span {
    padding: 0;
  }

}
</style>
