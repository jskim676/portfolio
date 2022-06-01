
const helloWorld = document.getElementById('hello-world');
const btnConfirm = document.getElementById('confirm');
const main = document.getElementById('main');
const qs = document.getElementById('question');
const qsmark = document.querySelector('#clock > div > img');


btnConfirm.addEventListener('click', function() {
  helloWorld.classList.add('on');
  main.classList.remove('on');
});


// --------------game --------------
const gameWin = document.getElementById('game-window');
const gameWinBtn = Array.from(document.getElementById('game-window-button').children);
const icons = document.getElementById('icon').children;
const gameicons = Array.from(document.getElementById('gameicon').children);
const gametime = document.getElementById('gametime');
const program = document.getElementById('program');


const programName0 = document.createElement('div');

let num = 1;

// game icon
icons[0].addEventListener('dblclick', function() {
  // zIndex 값 설정
  num++;
  gameWin.children[0].style.zIndex = num;
  qs.children[0].style.zIndex = num;

  gameWin.classList.remove('on');
  qs.classList.remove('on');
  qsmark.classList.remove('hidden');
  
  program.appendChild(programName0);
  programName0.classList.add('window-style');
  
  // 최소화 버튼
  gameWinBtn[0].addEventListener('click', e=> {
    gameWin.classList.add('on');
    qs.classList.add('on');
  });
  
  // 작업표시줄 쪽 프로그램 클릭시 최소화 해제
  programName0.addEventListener('click', e=> {
    gameWin.classList.remove('on');
    qs.classList.remove('on');
  });
  
  gameWinBtn[1].addEventListener('click', e=> {
    qs.classList.add('on');
  });
  
  // X 버튼
  gameWinBtn[2].addEventListener('click', e=>{
    gameWin.classList.add('on');
    qs.classList.add('on');
    qsmark.classList.add('hidden');
    programName0.parentNode.removeChild(programName0);
  });
  
  changeWin.classList.add('on');
  isStatus = true;
});  

const scrollBar = document.getElementById('scrollbar');
const scrolling = document.getElementById('scroll');
const scrollParent = scrolling.parentNode;

let gametimeData = ["League of Legends 5,711 Hours", "Maplestory 5,000 Hours", "Mabinogi 3,200 Hours", "Dead by Daylight 1,500 Hours", "PUBG 1,250 Hours", "Apex Legends 600 Hours"
]


// 게임 시간을 보여줌
for(let i=0; i<gametimeData.length; i++) {
  gameicons[i].addEventListener('click', e=> {
    gametime.textContent = gametimeData[i];
  });
}


// -------------- portfolio --------------
const pfWin = document.getElementById('portfolio-window');
const pfWinBtn = document.getElementById('portfolio-window-button').children[0];
const programName1 = document.createElement('div');

icons[1].addEventListener('dblclick', function() {
  num++;
  pfWin.children[0].style.zIndex = num;
  pfWin.classList.remove('on');
  
  program.appendChild(programName1);
  programName1.classList.add('window-style');

  pfWinBtn.addEventListener('click',e=> {
    
    pfWin.classList.add('on');
    programName1.parentNode.removeChild(programName1);
  });
  
  changeWin.classList.add('on');
  isStatus = true;
}); 


// -------------- curriculum --------------
const ccWin = document.getElementById('curriculum-window');
const ccWinBtn = document.getElementById('curriculum-window-button').children[0];
const programName2 = document.createElement('div');

icons[2].addEventListener('dblclick', function() {
  num++;
  ccWin.children[0].style.zIndex = num;
  ccWin.classList.remove('on');
  
  program.appendChild(programName2);
  programName2.classList.add('window-style');

  ccWinBtn.addEventListener('click',e=> {
    
    ccWin.classList.add('on');
    programName2.parentNode.removeChild(programName2);
  });
  
  changeWin.classList.add('on');
  isStatus = true;
}); 

// -------------- contact --------------
const ctWin = document.getElementById('contact-window');
const ctWinBtn = document.getElementById('contact-window-button').children[0];
const programName3 = document.createElement('div');

icons[3].addEventListener('dblclick', function() {
  num++;
  ctWin.children[0].style.zIndex = num;
  ctWin.classList.remove('on');
  
  program.appendChild(programName3);
  programName3.classList.add('window-style');
  

  ctWinBtn.addEventListener('click',e=> {
    ctWin.classList.add('on');
    programName3.parentNode.removeChild(programName3);
  });
  
  changeWin.classList.add('on');
  isStatus = true;
}); 

// -------------- change --------------
const changeWin = document.getElementById('change-window');
const start = document.getElementById('start');
const startBtn = document.getElementById('start-button');

let isStatus = true;
startBtn.addEventListener('click',e=> {
  num++;
  changeWin.children[0].style.zIndex = num;

  if(isStatus === true) {
    changeWin.classList.remove('on');
    isStatus = false;
  } else {
    changeWin.classList.add('on');
    isStatus = true;
  }
});




// -------------- clock --------------
const clock = document.querySelector('#clock > div > p');

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();

  let ampm = hour >= 12 ? "오후" : "오전";

  if(hour>12) {
    clock.textContent = `${ampm} ${hour-12} : ${minute < 10 ? `0${minute}` : minute}`;
  } else if (hour === 12) {
    clock.textContent = `${ampm} ${hour} : ${minute < 10 ? `0${minute}` : minute}`;
  } else {
    clock.textContent = `${ampm} ${hour<10 ? `0${hour}`: hour} : ${minute < 10 ? `0${minute}` : minute}`;
  }
}


function init () {
  setInterval(getTime,1000);
}

init();




