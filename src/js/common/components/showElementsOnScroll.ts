/**
 * Show and hide elements (header and to-top-btn) while scrolling
 */
const showElements = () => {
  
  const header = document.querySelector(".scroll");
  const btn = document.querySelector(".js-to-top");
  
  window.addEventListener("scroll", () => {
    if (header && btn) {
      if (window.scrollY > 300) {
        header.classList.add("show");
        btn.classList.add("show");
      }
      else {
        header.classList.remove("show");
        btn.classList.remove("show");
      }
    }
  });
}

export default showElements