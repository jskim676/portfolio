import filmographyTitle from "./filmography.js";
import slideAndHover from "./slideAndHover.js";
import wheel from "./wheel.js";

const introTitle = document.getElementById('introTitle');

const {height : sectionHeight} = introTitle.parentNode.getBoundingClientRect(); 

const sectionTitle = {
  one : document.getElementById('sectionOneTitle'),
  two: document.getElementById('sectionTwoTitle'),
  three : document.getElementById('sectionThreeTitle'),
  four : document.getElementById('sectionFourTitle'),
  five : document.getElementById('sectionFiveTitle'),
}


wheel(sectionTitle.one, sectionHeight/2, `animation-YFast`); wheel(sectionTitle.two, sectionHeight*3/2, `animation-XFast`);
wheel(sectionTitle.three, sectionHeight*5/2, `animation-YFast`); wheel(sectionTitle.four, sectionHeight*7/2, `animationXFast`);
wheel(sectionTitle.five, sectionHeight*9/2, `animation-YFast`);

filmographyTitle();
slideAndHover();
