import currentYear from './components/currentYear';
import initAOS from './components/initAOS';
import menuToggler from './components/menuToggler'
import modeSwitch from './components/modeSwitch';
import showElements from './components/showElementsOnScroll'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    menuToggler();
    showElements();
    initAOS();
    modeSwitch();
    currentYear();
  },
  false
)
