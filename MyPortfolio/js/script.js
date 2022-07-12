import getTime from "./clock.js";
import questionIncrease from "./questionIncrease.js";
import moving from "./moving.js";
import gameInfo from "./gameInfo.js";
import iconClick from "./icon.js";
import fullMode from "./fullMode.js";

//스크롤 
export const scrolling = document.getElementById('scroll')
export let scrollingTop = scrolling.parentNode.getBoundingClientRect().height - scrolling.getBoundingClientRect().height
const scrollParent = scrolling.parentNode;

let num = 1;

export const idSet = {
  zero : 'game-taskBar',
  one : 'curriculum-taskBar',
  two : 'portfolio-taskBar',
  three : 'contact-taskBar'
}

export const src = {
  zero : './img/win98_icon/game_icon.svg',
  one : './img/win98_icon/curriculum_icon.svg',
  two : './img/win98_icon/portfolio_icon.svg',
  three : './img/win98_icon/contact_icon.svg'
}

export const textContent = {
  zero : 'Game',
  one : 'Curriculum',
  two : 'Portfolio',
  three : 'Contact'
}

export const icons = document.getElementById('icon').children;
export const programName = {
  program : document.getElementById('program'),

  Name0 : document.createElement('div'),
  Name0Icon : document.createElement('img'),
  Name0Text : document.createElement('p'),
  
  Name1 : document.createElement('div'),
  Name1Icon : document.createElement('img'),
  Name1Text : document.createElement('p'),

  Name2 : document.createElement('div'),
  Name2Icon : document.createElement('img'),
  Name2Text : document.createElement('p'),
  
  Name3 : document.createElement('div'),
  Name3Icon : document.createElement('img'),
  Name3Text : document.createElement('p'),
}

export const win = {
  cc : document.getElementById('curriculum-window'), 
  pf : document.getElementById('portfolio-window'),
  ct : document.getElementById('contact-window')
}

export const winBtn = {
  cc : document.getElementById('curriculum-window-button').children[0],
  pf : document.getElementById('portfolio-window-button').children[0],
  ct : document.getElementById('contact-window-button').children[0]
}

const helloWorld = document.getElementById('hello-world');
const btnConfirm = document.getElementById('confirm');
const desktop = document.getElementById('desktop');
export const qs = document.getElementById('question');
export const qsmark = document.querySelector('#clock > div > img');

const root = document.getElementById('root');


// --------------game --------------
export const gameWin = document.getElementById('game-window');
export const fullGameWin = document.getElementById('game-fullWindow');
export const gameWinBtn = Array.from(document.getElementById('game-window-button').children);
export const fullGameWinBtn = Array.from(document.getElementById('game-fullWindow-button').children);

fullMode();

function classAddRemove (target, add, remove) {
  target.addEventListener('click', function () {
    add.classList.add('hidden');
    remove.classList.remove('hidden');
  });
}

classAddRemove(btnConfirm, helloWorld, desktop);
classAddRemove(fullGameWinBtn[0], fullGameWin, qs);

// 게임 정보 확인
gameInfo();

// 질문 늘어나는 효과
questionIncrease(qs.children[0].children[0]);
questionIncrease(qs.children[0].children[1]);


// -------------- start --------------
const startWin = document.getElementById('start-window');
const startBtn = document.getElementById('start-button');

let isStatus = true;
startBtn.addEventListener('click',function() {
  num++;
  startWin.children[0].style.zIndex = num;
  if(isStatus === true) {
    startWin.classList.remove('hidden');
    isStatus = false;
  } else {
    startWin.classList.add('hidden');
    isStatus = true;
  }
});

desktop.addEventListener('click', function ()  {
  startWin.classList.add('hidden');
  isStatus = true;
});


// 커리큘럼의 아이콘을 마우스 오버하였을시 시작 메뉴가 펼쳐져 설명이 나온다.
const skill = Array.from(document.querySelectorAll('#skill > div > img'));
for(let k=0; k<skill.length; k++) {
  skill[k].addEventListener('mouseover', function() {
    num++;
    startWin.classList.remove('hidden');
    startWin.style.zIndex = num;
  });
}

// -------------- zIndex --------------
const topBar = Array.from(document.getElementsByClassName('top-bar'));


// -------------- desktop icon --------------

iconClick(icons[0], gameWin, gameWinBtn[2], num);
iconClick(icons[1], win.cc, winBtn.cc, num); 
iconClick(icons[2], win.pf, winBtn.pf, num); 
iconClick(icons[3], win.ct, winBtn.ct, num);

// -------------- topBar & scrolling move --------------
moving(topBar[0],topBar[0].parentNode,root);
moving(topBar[1],topBar[1].parentNode,root);
moving(topBar[3],topBar[3].parentNode,root);
moving(topBar[4],topBar[4].parentNode,root);
moving(topBar[5],topBar[5].parentNode,root);
moving(scrolling, scrolling, scrollParent);

// -------------- clock --------------
getTime();

