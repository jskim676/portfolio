import scrolling from "./scrolling.js";
import typeText from "./typeText.js";

// 글자 타이핑
typeText();

// --------------- section-2 ---------------

// const section2 = document.getElementById('section-2');
export const s2h1Text = document.querySelector('#section-2 > div:nth-child(1)');
export const img = document.querySelector('#section-2 > div:nth-child(2)');
export const {height : sectionHeight} = document.getElementById('section-2').getBoundingClientRect(); 
export const s3h1Text = document.querySelector('#section-3 > div:nth-child(1)');
export const indi = document.getElementById('indicate');
export const win = document.getElementById('window');
export const explain = document.getElementById('explain');


// --------------- section-3 ---------------
const ul = document.querySelector('main > nav > ul');
const main = document.querySelector('main');

const indiBox = document.querySelectorAll('#indicate > div > div');
const rightNav = document.getElementById('rightNav');



scrolling(sectionHeight/4, s2h1Text); scrolling(sectionHeight/1.5, img); scrolling(sectionHeight*5/4, s3h1Text); scrolling(sectionHeight*5/3, win); scrolling(sectionHeight*5/3, explain);

// --------------- section-3 list---------------
const skinCog = document.getElementById('skinCog');
const ggCog = document.getElementById('ggCog');
const skinQuizSetting = document.getElementById('skinQuizSetting');
const ggQuizSetting = document.getElementById('ggQuizSetting');

let cogData = true;

function cog (target) {
  target.addEventListener('click',e=> {
    if(cogData === true) {
      target.style.transform = "rotate(0.5turn)";
      target.style.transition = "1s";
      cogData = false;
      if(target === skinCog) {
        skinQuizSetting.parentNode.classList.remove('hidden');
        skinQuizSetting.parentNode.classList.add('animation-YFast');
      } else if(target === ggCog) {
        // ggQuizSetting.classList.remove('hidden');
      }
    } else {
      target.style.transform = "rotate(0turn)";
      target.style.transition = "1s";
      cogData = true;
      if(target === skinCog) {
        skinQuizSetting.parentNode.classList.add('hidden');
        skinQuizSetting.parentNode.classList.remove('animation-YFast');
      } else if(target === ggCog) {
        // ggQuizSetting.classList.add('hidden');
      }
    }
  });
}

cog(skinCog); cog(ggCog);

      // window 메뉴 부분
      for(let i=0; i<ul.children.length; i++) {
        ul.children[i].addEventListener('click', (event) => {
          let getDataset = event.target.dataset.menu;
          for(let i = 0; i<ul.children.length; i++) {
            if(ul.children[i].dataset.menu === getDataset) {
              main.children[i+1].classList.remove('on');
              ul.children[i].classList.add('select');
              indi.style.right = `${13*i}vw`;
              indiBox[i].style.opacity = 1;
              indiBox[i].classList.add('indicate');
              explain.children[i].style.opacity = 1;
            } else {
              main.children[i+1].classList.add('on');
              ul.children[i].classList.remove('select');
              indiBox[i].style.opacity = 0.5;
              indiBox[i].classList.remove('indicate');
              explain.children[i].style.opacity = 0;
            }
          }
          if(ul.children[i].dataset.menu === "1"||ul.children[i].dataset.menu === "2") {
              rightNav.classList.remove('on');
              skinQuizSetting.parentNode.classList.add('hidden');
              // ggQuizSetting.classList.add('hidden');
            } else {
                rightNav.classList.add('on');
              }
            });
          }
          
      // indicate 부분
      for(let j=0; j<indi.children[0].children.length; j++) {
        indi.children[0].children[j].addEventListener('click', (event) => {
          let getDataset = event.target.dataset.indi;
          for(let j = 0; j<indi.children[0].children.length; j++) {
            if(indi.children[0].children[j].dataset.indi === getDataset) {
              main.children[j+1].classList.remove('on');
              ul.children[j].classList.add('select');
              indi.style.right = `${13*j}vw`;
              indiBox[j].style.opacity = 1;
              indiBox[j].classList.add('indicate');
              explain.children[j].style.opacity = 1;
            } else {
              main.children[j+1].classList.add('on');
              ul.children[j].classList.remove('select');
              indiBox[j].style.opacity = 0.2;
              indiBox[j].classList.remove('indicate');
              explain.children[j].style.opacity = 0;
            }
          }
          if(indi.children[0].children[j].dataset.indi === "1"||indi.children[0].children[j].dataset.indi === "2") {
              rightNav.classList.remove('on');
              skinQuizSetting.parentNode.classList.add('hidden');
              // ggQuizSetting.classList.add('hidden');
            } else {
                rightNav.classList.add('on');
              }
            });
          }