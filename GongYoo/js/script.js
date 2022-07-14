import filmographyTitle from "./filmography.js";
import slideAndHover from "./slideAndHover.js";
import scrolling from "./scrolling.js";
import ad from "./advertisement.js";

const introTitle = document.getElementById('introTitle');

const {height : sectionHeight} = introTitle.parentNode.getBoundingClientRect(); 

const sectionTitle = {
  one : document.getElementById('sectionOneTitle'),
  two: document.getElementById('sectionTwoTitle'),
  three : document.getElementById('sectionThreeTitle'),
  four : document.getElementById('sectionFourTitle'),
  five : document.getElementById('sectionFiveTitle'),
}

ad();

scrolling(sectionTitle.one, sectionHeight/2, `animation-YFast`); scrolling(sectionTitle.two, sectionHeight*3/2, `animation-XFast`);
scrolling(sectionTitle.three, sectionHeight*5/2, `animation-YFast`); scrolling(sectionTitle.four, sectionHeight*7/2, `animationXFast`);
scrolling(sectionTitle.five, sectionHeight*9/2, `animation-YFast`);

filmographyTitle();
slideAndHover();
