import { createEventDispatcher } from "svelte";

export default function page() {
  const dispatch = createEventDispatcher();
  return function pageExit(page, pageLink, pageExitDuration) {
    page.style.opacity = 0;
    const timerId = setTimeout(()=> {
      dispatch("page-link", {page: pageLink});
      clearTimeout(timerId);
    }, pageExitDuration);
  }
}