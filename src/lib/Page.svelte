<!-- SCRIPTS ///////////////////////////////////////////////////// -->
<script>
  import SiteHeader from "./SiteHeader.svelte";
  import SiteFooter from "./SiteFooter.svelte";
  import SiteMenu from "./SiteMenu.svelte";
  import LogInModal from "./LogInModal.svelte";

  let modalsOpen = {
    siteMenu: false,
    logIn: false,
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
/>

<SiteFooter />

<SiteMenu 
  openLogInModal={()=> openModal("logIn")}
  closeModal={()=> closeModal("siteMenu")} 
  open={modalsOpen.siteMenu} 
/>

<LogInModal 
  closeModal={()=> closeModal("logIn")} 
  open={modalsOpen.logIn} 
/>
