// MAIN FUNCTION ///////////////////////////////////////////////////////
export default function site(pageExitDuration) {
  viewport();
  definePageExitDuration(pageExitDuration);
}

// VIEWPORT ---------------------------------------------------------------
function viewport() {
  function defineViewport() {
    document.documentElement.style.setProperty("--vph", `${window.innerHeight}px`);
  };

  defineViewport();

  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        defineViewport();
        resizeReady = false;
        clearTimeout(timerId);
      }, 2000);
    };
  });
};

// PAGE EXIT -----------------------------------------------------------
function definePageExitDuration(duration) {
  document.documentElement.style.setProperty("--page-exit-duration", `${duration}ms`);
};