import getTime from "./clock.js";
import heightIncrease from "./heightIncrease.js";
// import moving from "./moving.js";

const programName = {
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


const helloWorld = document.getElementById('hello-world');
const btnConfirm = document.getElementById('confirm');
const main = document.getElementById('main');
const qs = document.getElementById('question');
const qsmark = document.querySelector('#clock > div > img');

const move = Array.from(document.getElementsByClassName('top-bar'));
const root = document.getElementById('root');


btnConfirm.addEventListener('click', function() {
  helloWorld.classList.add('hidden');
  main.classList.remove('hidden');
})

// --------------game --------------
const gameWin = document.getElementById('game-window');
const fullGameWin = document.getElementById('game-fullWindow');
const gameWinBtn = Array.from(document.getElementById('game-window-button').children);
const fullGameWinBtn = Array.from(document.getElementById('game-fullWindow-button').children);
const icons = document.getElementById('icon').children;
const gameicons = Array.from(document.getElementById('gameicon').children);
const gametime = document.getElementById('gametime');

const program = document.getElementById('program');

let num = 1;

// game icon
icons[0].addEventListener('dblclick', function() {
  // zIndex 값 설정
  num++;
  gameWin.children[0].style.zIndex = num+1;
  
  gameWin.classList.remove('hidden');
  qs.classList.remove('hidden');
  qsmark.classList.remove('hidden');
  
  program.appendChild(programName.Name0);
  programName.Name0.classList.add('window-style');
  programName.Name0.setAttribute('id','game-taskBar')
  programName.Name0.appendChild(programName.Name0Icon);
  programName.Name0Icon.setAttribute("src", "./img/win98_icon/game_icon.svg");
  programName.Name0.appendChild(programName.Name0Text);
  programName.Name0Text.textContent = "Game";

  programName.Name0.addEventListener('click', function() {
    num++;
    gameWin.children[0].style.zIndex = num+1;
  });
  
  startWin.classList.add('hidden');
  isStatus = true
});  


let fullmode = false;
// 최소화 버튼
gameWinBtn[0].addEventListener('click', e=> {
  gameWin.classList.add('hidden');
  qs.classList.add('hidden');
});

// 최대화 버튼
gameWinBtn[1].addEventListener('click', e=> {
  gameWin.classList.add('hidden');
  fullGameWin.classList.remove('hidden');
  num++;
  fullGameWin.children[0].style.zIndex = num+1;
  fullmode = true;
});

// X 버튼
gameWinBtn[2].addEventListener('click', e=>{
  gameWin.classList.add('hidden');
  qs.classList.add('hidden');
  qsmark.classList.add('hidden');
  programName.Name0.parentNode.removeChild(programName.Name0);
});


// 전체화면 최소화 버튼
fullGameWinBtn[0].addEventListener('click', e=> {
  fullGameWin.classList.add('hidden');
  qs.classList.add('hidden');
});

// 전체화면 최대화 버튼
fullGameWinBtn[1].addEventListener('click', e=> {
  gameWin.classList.remove('hidden');
  fullGameWin.classList.add('hidden');
  fullmode = false;
});

// 전체화면 X 버튼
fullGameWinBtn[2].addEventListener('click', e=>{
  fullGameWin.classList.add('hidden');
  qs.classList.add('hidden');
  qsmark.classList.add('hidden');
  programName.Name0.parentNode.removeChild(programName.Name0);
});

// 작업표시줄 쪽 프로그램 클릭시 최소화 해제
programName.Name0.addEventListener('click', e=> {
  if(fullmode === false) {
    gameWin.classList.remove('hidden');
    qs.classList.remove('hidden');
  } else {
    fullGameWin.classList.remove('hidden');
    qs.classList.remove('hidden');
  }
});

// 윈도우 바 더블 클릭시 최대화
document.querySelector('.smallTopBar').addEventListener('dblclick', function() {
  gameWin.classList.add('hidden');
  fullGameWin.classList.remove('hidden');
  num++;
  fullGameWin.children[0].style.zIndex = num+1;
  fullmode = true;
});


//스크롤 
const scrolling = document.getElementById('scroll');
const scrollParent = scrolling.parentNode;

let scrollingTop = scrolling.parentNode.getBoundingClientRect().height - scrolling.getBoundingClientRect().height;

// -------------- gamelist 스크롤--------------
const gameicon = document.getElementById('gameicon');
let number = 0;
gameicon.addEventListener('wheel', (e) => { 
  if(e.deltaY===100) {
    if(number<10) {
      number++;
      gameicon.style.top = `-${number}0%`;
      scrolling.style.top = `${scrollingTop /10 * number}px`;
    }
  } else {
    if(number>0) {
      number--;
      gameicon.style.top = `-${number}0%`;
      scrolling.style.top = `${scrollingTop /10 * number}px`;
    }
  }
});


// 게임 시간을 보여줌
let gametimeData = ["League of Legends : 5,720 Hours", "Maplestory : 5,400 Hours", "Mabinogi : 3,500 Hours", "Dead by Daylight : 1,500 Hours", "PUBG : 1,250 Hours", "Apex Legends : 8,00 Hours", "Overwatch : 600 Hours", "Lost Ark : 400 Hours", "Left 4 Dead 2 : 360 Hours", "GTA 5 : 300 Hours", "Team Fortress 2 : 120 Hours", "Monster Hunter:World : 100 Hours"
]

for(let i=0; i<gametimeData.length; i++) {
  gameicons[i].addEventListener('click', function () {
    gametime.textContent = gametimeData[i];
  });
}

// 게임을 클릭시 테두리가 생김
// dataset 값을 대문자로 쓰면 인식하지 못한다
for(let j=0; j<gameicon.children.length; j++) {
  gameicon.addEventListener('click', (event) => {
    let getDataset = event.target.dataset.gameicon;
    if(gameicon.children[j].dataset.gameicon === getDataset) {
      gameicon.children[j].classList.add('outLine');
    } else {
      gameicon.children[j].classList.remove('outLine');
    }
  });
}


// 질문 늘어나는 효과
heightIncrease(qs.children[0].children[0]);
heightIncrease(qs.children[0].children[1]);

// -------------- curriculum --------------
const ccWin = document.getElementById('curriculum-window');
const ccWinBtn = document.getElementById('curriculum-window-button').children[0];
const skill = Array.from(document.querySelectorAll('#skill > div > img'));

icons[1].addEventListener('dblclick', function() {
  num++;
  ccWin.children[0].style.zIndex = num;
  ccWin.classList.remove('hidden');
  
  program.appendChild(programName.Name1);
  programName.Name1.classList.add('window-style');
  programName.Name1.setAttribute('id','curriculum-taskBar')
  programName.Name1.appendChild(programName.Name1Icon);
  programName.Name1Icon.setAttribute("src", "./img/win98_icon/curriculum_icon.svg");
  programName.Name1.appendChild(programName.Name1Text);
  programName.Name1Text.textContent = "Curriculum";

  programName.Name1.addEventListener('click', function() {
    num++;
    ccWin.children[0].style.zIndex = num+1;
  });

  
  startWin.classList.add('hidden');
  isStatus = true;
}); 

ccWinBtn.addEventListener('click',e=> {
  ccWin.classList.add('hidden');
  programName.Name1.parentNode.removeChild(programName.Name1);
});


// -------------- portfolio --------------
const pfWin = document.getElementById('portfolio-window');
const pfWinBtn = document.getElementById('portfolio-window-button').children[0];

icons[2].addEventListener('dblclick', function() {
  num++;
  pfWin.children[0].style.zIndex = num;
  pfWin.classList.remove('hidden');
  
  program.appendChild(programName.Name2);
  programName.Name2.classList.add('window-style');
  programName.Name2.setAttribute('id','portfolio-taskBar')
  programName.Name2.appendChild(programName.Name2Icon);
  programName.Name2Icon.setAttribute("src", "./img/win98_icon/portfolio_icon.svg");
  programName.Name2.appendChild(programName.Name2Text);
  programName.Name2Text.textContent = "Portfolio";

  programName.Name2.addEventListener('click', function() {
    num++;
    pfWin.children[0].style.zIndex = num+1;
  });

  startWin.classList.add('hidden');
  isStatus = true;
}); 

pfWinBtn.addEventListener('click',e=> {
  pfWin.classList.add('hidden');
  programName.Name2.parentNode.removeChild(programName.Name2);
});


// -------------- contact --------------
const ctWin = document.getElementById('contact-window');
const ctWinBtn = document.getElementById('contact-window-button').children[0];

icons[3].addEventListener('dblclick', function() {
  num++;
  ctWin.children[0].style.zIndex = num;
  ctWin.classList.remove('hidden');
  
  program.appendChild(programName.Name3);
  programName.Name3.classList.add('window-style');
  programName.Name3.setAttribute('id','contact-taskBar')
  programName.Name3.appendChild(programName.Name3Icon);
  programName.Name3Icon.setAttribute("src", "./img/win98_icon/contact_icon.svg");
  programName.Name3.appendChild(programName.Name3Text);
  programName.Name3Text.textContent = "Contact";

  programName.Name3.addEventListener('click', function() {
    num++;
    ctWin.children[0].style.zIndex = num+1;
  });

  startWin.classList.add('hidden');
  isStatus = true;
}); 

ctWinBtn.addEventListener('click',e=> {
  ctWin.classList.add('hidden');
  programName.Name3.parentNode.removeChild(programName.Name3);
});

// -------------- start --------------
const startWin = document.getElementById('start-window');
const startBtn = document.getElementById('start-button');

let isStatus = true;
startBtn.addEventListener('click',e=> {
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

main.children[0].addEventListener('click', e=> {
  startWin.classList.add('hidden');
  isStatus = true;
});

for(let k=0; k<skill.length; k++) {
  skill[k].addEventListener('mouseover', function() {
    num++;
    startWin.classList.remove('hidden');
    startWin.style.zIndex = num;
  });
}


// -------------- clock --------------
getTime();

// -------------- move --------------
function moving (topbar,win,container) {
  const {width:containerWidth, height:containerHeight} = container.getBoundingClientRect();
  const {width:moveWidth, height:moveHeight} = win.getBoundingClientRect();
  
  let isDragging = null;
  let originLeft = null;
  let originTop = null;
  let originX = null;
  let originY = null;
  
  topbar.addEventListener('mousedown', (e) =>{
    isDragging = true;
    originX = e.clientX;
    originY = e.clientY;
    originLeft = win.offsetLeft;
    originTop = win.offsetTop;
  });
  
  win.addEventListener('mousedown', function() {
    num++;
    win.style.zIndex = num;
  });

  document.addEventListener('mouseup', (e) => {
    isDragging = false;
  });
  
  // 창을 드래그 할때 원래 위치했던 좌표해서 움직여진 좌표의 차이값을 원래 위치했던 left 값에 더한다.
  // 화면 밖으로 나가지않게 범위를 지정하였다.
  document.addEventListener('mousemove', (e)=> {
    if(isDragging) {
      const diffX = e.clientX - originX;
      const diffY = e.clientY - originY;
  
      // 박스가 나갈수 없게 범위 지정
      const endOfXPoint = containerWidth - moveWidth;
      const endOfYPoint = containerHeight - moveHeight;
  
      win.style.left = `${Math.min(Math.max(0, originLeft+diffX), endOfXPoint)}px`;
      win.style.top = `${Math.min(Math.max(0, originTop+diffY), endOfYPoint)}px`;
    }
  });

  scrolling.addEventListener('mousemove', (e) => {
    if(isDragging) {
      const diffY = e.clientY - originY;
      const endOfYPoint = containerHeight - moveHeight;
  
      gameicon.style.top = `-${Math.floor(Math.min(Math.max(0, originTop+diffY), endOfYPoint)/scrollingTop*100)}%`;
    }
  });
}

moving(move[0],move[0].parentNode,root);
moving(move[1],move[1].parentNode,root);
moving(move[3],move[3].parentNode,root);
moving(move[4],move[4].parentNode,root);
moving(move[5],move[5].parentNode,root);
moving(scrolling, scrolling, scrollParent);
