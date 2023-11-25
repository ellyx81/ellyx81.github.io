import menuToggler from './components/menuToggler'
import showElements from './components/showElementsOnScroll'

document.addEventListener(
  'DOMContentLoaded',
  () => {
    menuToggler();
    showElements()
  },
  false
)
