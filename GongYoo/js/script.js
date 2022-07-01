import filmographyTitle from "./filmography.js";
import slide from "./slide.js";

const introTitle = document.getElementById('introTitle');
const sectionOneTitle = document.getElementById('sectionOneTitle');
const {height : sectionHeight} = introTitle.parentNode.getBoundingClientRect(); 

window.addEventListener('wheel',e=> {
  let winY = window.pageYOffset;
  if(winY > sectionHeight/2) {
    introTitle.children[0].style.transition = "0.3s";
    introTitle.children[0].style.opacity = 0;
    introTitle.children[0].style.position = "absolute";

    sectionOneTitle.children[0].style.opacity = 1;
    sectionOneTitle.children[0].classList.add('animation-YFast');
  } else {
    introTitle.children[0].style.opacity = 0.75;
    sectionOneTitle.children[0].style.opacity = 0;
    sectionOneTitle.children[0].classList.remove('animation-YFast');
  }
});

filmographyTitle();
slide();

