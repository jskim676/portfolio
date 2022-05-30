
const helloWorld = document.getElementById('hello-world');
const btnConfirm = document.getElementById('confirm');
const main = document.getElementById('main');
const gameWin = document.getElementById('game-window');
const qs = document.getElementById('question');



btnConfirm.addEventListener('click', function() {
  helloWorld.classList.add('on');
  main.classList.remove('on');
});


// --------------game ---------------------
const gameWinBtn = Array.from(document.getElementById('game-window-button').children);
const icons = document.getElementById('icon').children;
const gameicons = Array.from(document.getElementById('gameicon').children);
const gametime = document.getElementById('gametime');
const program = document.getElementById('program');

// game icon
icons[0].addEventListener('dblclick', function() {
  gameWin.classList.remove('on');
  qs.classList.remove('on');

  const programName1 = document.createElement('div');
  program.appendChild(programName1);
  
  
  // 최소화 버튼
  gameWinBtn[0].addEventListener('click', e=> {
    gameWin.classList.add('on');
    qs.classList.add('on');
  });

  // 작업표시줄 쪽 프로그램 클릭시 최소화 해제
  programName1.addEventListener('click', e=> {
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
    program.removeChild(programName1);
  });
  
});  

const scrollBar = document.getElementById('scrollbar');
const scrolling = document.getElementById('scroll');
const scrollParent = scrolling.parentNode;








// portfolio
const pfWin = document.getElementById('portfolio-window');
const pfWinBtn = document.getElementById('portfolio-window-button').children[0];

icons[1].addEventListener('dblclick', function() {
  pfWin.classList.remove('on');

  const programName2 = document.createElement('div');
  program.appendChild(programName2);

  pfWinBtn.addEventListener('click',e=> {
    pfWin.classList.add('on');
    program.removeChild(programName2);
    console.log(program);
  });
}); 





let gametimeData = ["League of Legends 5,711 Hours", "Maplestory 5,000 Hours", "Mabinogi 3,200 Hours", "Dead by Daylight 1,500 Hours", "PUBG 1,250 Hours", "Apex Legends 600 Hours"
]



// 게임 시간을 보여줌
for(let j=0; j<gametimeData.length; j++) {
  gameicons[j].addEventListener('click', e=> {
    gametime.textContent = gametimeData[j];
  });
}



