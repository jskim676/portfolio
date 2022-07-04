import filmographyTitle from "./filmography.js";
import slide from "./slide.js";

const introTitle = document.getElementById('introTitle');
const sectionOneTitle = document.getElementById('sectionOneTitle');
const {height : sectionHeight} = introTitle.parentNode.getBoundingClientRect(); 

window.addEventListener('wheel',e=> {
  let winY = window.pageYOffset;
  if(winY > sectionHeight/2) {
    sectionOneTitle.children[0].style.opacity = 1;
    sectionOneTitle.children[0].classList.add('animation-YFast');
  } else {
    sectionOneTitle.children[0].style.opacity = 0;
    sectionOneTitle.children[0].classList.remove('animation-YFast');
  }
});

filmographyTitle();
slide();

const storyList = document.querySelector('#section-2 > div:nth-child(2) > ul');

// storyList.addEventListener('click', e=> {
//   let getDataset = e.target.dataset.story;
//   console.log(getDataset);
//   for(let i=0; i<storyList.children.length; i++) {
//     if(storyList.children[i].dataset.story === getDataset) {
//       storyList.children[i].style.height = "50%";
//     } else if (storyList.children[i].dataset.story === undefined) {
//       storyList.children[i].style.opacity = 1;
//       console.log('test');
//     } else {
//       storyList.children[i].style.opacity = 0;
//     }
//   }
// });