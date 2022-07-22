import filmographyTitle from "./filmography.js";
import slideAndHover from "./slideAndHover.js";
import scrolling from "./scrolling.js";
import ad from "./advertisement.js";

// const ul = document.querySelector('nav > ul');

const introTitle = document.getElementById('introTitle');

const {height : sectionHeight} = introTitle.parentNode.getBoundingClientRect(); 

export const sectionTitle = {
  one : document.getElementById('sectionOneTitle'),
  two: document.getElementById('sectionTwoTitle'),
  three : document.getElementById('sectionThreeTitle'),
  four : document.getElementById('sectionFourTitle'),
  five : document.getElementById('sectionFiveTitle'),
}

ad();

scrolling(sectionTitle.one, sectionHeight/2, `animation-YFast`); scrolling(sectionTitle.two, sectionHeight*3/2, `animation-XFast`);
scrolling(sectionTitle.three, sectionHeight*5/2, `animation-XFast`); scrolling(sectionTitle.four, sectionHeight*7/2, `animationXFast`);
scrolling(sectionTitle.five, sectionHeight*9/2, `animation-YFast`); 
// scrolling(ul,sectionHeight/2,`fadeInFast`);

filmographyTitle();
slideAndHover();




// const section = {
//   one : document.getElementById('section-1'),
//   two: document.getElementById('section-2'),
//   three : document.getElementById('section-3'),
//   four : document.getElementById('section-4'),
//   five : document.getElementById('section-5'),
// }

// const {height : pageHeight} = section.one.getBoundingClientRect();

// for(let i=0; i<ul.children.length; i++) {
//   ul.children[i].addEventListener('click',function () {
//     let value = ul.children[i].dataset.li;
//     window.scrollTo({
//       top:pageHeight*value,
//       behavior:"smooth",
//     })
//   });
// }



// ul.addEventListener('click', e=> {
//   let getDataset = e.target.dataset.li;
//   if(getDataset !== undefined) {
//     for(let i=0; i<ul.children.length; i++) {
//       if(ul.children[i].dataset.li === getDataset) {
//         ul.children[i].classList.add('select');
//         console.log('test');
//       } else {
//         ul.children[i].classList.remove('select');
//       }
//     }
//   }
// })