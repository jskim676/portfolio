import { ul, pageHeight } from "./script.js";

function scrolling (target, height, animation) {
  window.addEventListener('wheel', function() {
    let winY = window.pageYOffset;
    if(winY > height) {
      target.style.opacity = 1;
      target.classList.add(animation);
      if(winY > pageHeight/2) {
        ul.style.opacity = 1;
      } else {
        ul.style.opacity = 0;
      }
    } else {
      target.style.opacity = 0;
      target.classList.remove(animation);
    }
  });
}

export default scrolling