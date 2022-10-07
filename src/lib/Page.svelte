<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  import SiteHeader from "./SiteHeader.svelte";
  import SiteFooter from "./SiteFooter.svelte";
  import SiteMenuModal from "./SiteMenuModal.svelte";
  import LogInModal from "./LogInModal.svelte";
  import SocialMediaModal from "./SocialMediaModal.svelte";

  let modalsOpen = {
    siteMenu: false,
    logIn: false,
    socialMedia: false,
  }

  function openModal(modal) {
    modalsOpen[modal] = true;
    modalsOpen = modalsOpen;
  };

  function closeModal(modal) {
    modalsOpen[modal] = false;
    modalsOpen = modalsOpen;
  }
  
</script>

<!-- MARKUP ///////////////////////////////////////////////////////// -->
<SiteHeader 
  openSiteMenuModal={()=> openModal("siteMenu")} 
  openLogInModal={()=> openModal("logIn")}
  openSocialMediaModal={()=> openModal("socialMedia")}
/>

<SiteFooter />

<SiteMenuModal 
  openLogInModal={()=> openModal("logIn")}
  closeModal={()=> closeModal("siteMenu")} 
  open={modalsOpen.siteMenu} 
/>

<LogInModal 
  closeModal={()=> closeModal("logIn")} 
  open={modalsOpen.logIn} 
/>

<SocialMediaModal
  closeModal={()=> closeModal("socialMedia")}
  open={modalsOpen.socialMedia}
 />
