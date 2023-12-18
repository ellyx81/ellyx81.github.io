/**
* Initialize AOS
*/
// @ts-ignore
import AOS from 'aos'
const initAOS = () => {
  
  AOS.init({
    startEvent: 'DOMContentLoaded',
    disable: function() {
      var maxWidth = 768;
      return window.innerWidth < maxWidth;
    }
  });
}

export default initAOS