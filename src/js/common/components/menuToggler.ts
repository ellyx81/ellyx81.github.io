/**
 * Toggle menu in mobile view
 */
const menuToggler = () => {
  const toggler = document.querySelector('.js-toggler');
  const nav = document.querySelector('.js-nav-contents');
  const anchors = document.querySelectorAll('.header__nav-item');
  const windowWidth = window.innerWidth;

  if (windowWidth < 767 && toggler && nav && anchors) {

    toggler?.addEventListener('click', () => {
      toggler?.classList.toggle('active');
      nav?.classList.toggle('expand');

      anchors.forEach(anchor => {
        anchor.addEventListener('click', function() {
          toggler.classList.remove('active');
          nav.classList.remove('expand');
        })
      })
      
    })
  };
}

export default menuToggler