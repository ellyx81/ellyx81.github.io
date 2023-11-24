/**
 * Expand and shirnk header while scrolling
 */
const headerScroll = () => {
  
  const header = document.querySelector(".scroll");
  window.addEventListener("scroll", () => {
    if (header) {
      if (window.scrollY > 400) {
        header.classList.add("show");
      }
      else {
        header.classList.remove("show");
      }
    }
  });
}

export default headerScroll