import initAOS from './components/initAOS';
import menuToggler from './components/menuToggler'
import showElements from './components/showElementsOnScroll'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    menuToggler();
    showElements();
    initAOS();
  },
  false
)
