// MAIN FUNCTION ///////////////////////////////////////////////////////
export default function site(pageExitDuration, restart) {
  viewport(restart);
  definePageExitDuration(pageExitDuration);
}

// VIEWPORT ---------------------------------------------------------------
function viewport(restart) {
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
        restart();
        clearTimeout(timerId);
      }, 2000);
    };
  });
};

// PAGE EXIT -----------------------------------------------------------
function definePageExitDuration(duration) {
  document.documentElement.style.setProperty("--page-exit-duration", `${duration}ms`);
};