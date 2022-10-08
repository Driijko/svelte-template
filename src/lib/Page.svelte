<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  // IMPORT SCRIPTS -------------------------------------------------


  // IMPORT COMPONENTS -----------------------------------------------
  import LoadingScreen from "./LoadingScreen.svelte";
  import SiteHeader from "./SiteHeader.svelte";
  import SiteFooter from "./SiteFooter.svelte";
  import SiteMenuModal from "./SiteMenuModal.svelte";
  import LogInModal from "./LogInModal.svelte";
  import SocialMediaModal from "./SocialMediaModal.svelte";
  import ChatAside from "./ChatAside.svelte";
  import ChatModal from "./ChatModal.svelte";


  // LOCAL STATE -----------------------------------------------------
  let modalsOpen = {
    siteMenu: false,
    logIn: false,
    socialMedia: false,
    chat: false,
  }

  // EVENT HANDLERS ---------------------------------------------------
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
<!-- <LoadingScreen /> -->

<SiteHeader 
  openSiteMenuModal={()=> openModal("siteMenu")} 
  openLogInModal={()=> openModal("logIn")}
  openSocialMediaModal={()=> openModal("socialMedia")}
/>

<SiteFooter openChatModal={()=> openModal("chat")} />

<ChatAside openChatModal={()=> openModal("chat")} />

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

<ChatModal
  open={modalsOpen.chat}
  closeModal={()=> closeModal("chat")}
/>
