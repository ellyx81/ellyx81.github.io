/**
* Initialize AOS
*/
// @ts-ignore
import AOS from 'aos'
const initAOS = () => {
  
  AOS.init({
    startEvent: 'DOMContentLoaded',
  });
}

export default initAOS