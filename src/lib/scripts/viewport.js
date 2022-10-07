export default function viewport() {
  
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
      }, 2000);
    };
  });
};