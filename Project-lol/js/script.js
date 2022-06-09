// --------------- section-1 ---------------
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const color = ["rgb(83, 131, 232)", "rgb(223, 187, 102)", "rgb(180, 16, 16)", "rgb(205, 209, 255)"]
const textArray = ["OP.GG", "FOW.KR", "INVEN", "LOL.ITEO"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
// 단어 선택 숫자
let charIndex = 0;
// 단어철자 선택 숫자

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // 단어의 철자 총 갯수가 철자 선택숫자보다 크다면 
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    // typing 이라는 클래스가 존재하지 않으면 추가해줘
    typedTextSpan.style.color = color[textArrayIndex];
    // 추가되는 글자의 색깔은 color 변수에서 대입
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    // 글자 내용에 한글자씩 대입
    charIndex++;
    // 철자 선택 숫자 증가
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (textArrayIndex===textArray.length-1){
      return console.log('Hello, world!');
  }
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    // typing 이라는 클래스가 존재하지 않으면 추가해줘
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    // 
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + typingDelay);
});


// --------------- section-2 ---------------
const section2 = document.getElementById('section-2');
const s2h1Text = document.querySelector('#section-2 > div:nth-child(1)');
const img = document.querySelector('#section-2 > div:nth-child(2)');

const {height : sectionHeight} = section2.getBoundingClientRect(); 



window.addEventListener('wheel',e=> {
  let winY = window.pageYOffset;
  if(winY > sectionHeight/6) {
    s2h1Text.classList.remove('hidden');
    s2h1Text.classList.add('animationY');
  } else {
    s2h1Text.classList.add('hidden');
    s2h1Text.classList.remove('animationY');
  }
  
  if(winY > sectionHeight/1.5) {
    img.classList.remove('hidden');
    img.classList.add('animationY');
  } else {
    img.classList.add('hidden');
    img.classList.remove('animationY');
  }
});




// --------------- section-3 ---------------
const ul = document.querySelector('main > nav > ul');
const main = document.querySelector('main');
const dashboardBtn = document.getElementById('dashboardBtn');
const skinQuizBtn = document.getElementById('skinQuizBtn');
const guessingGameBtn = document.getElementById('guessingGameBtn');
const randomChampionBtn = document.getElementById('randomChampionBtn');
const tarotCardBtn = document.getElementById('tarotCardBtn');

const s3h1Text = document.querySelector('#section-3 > div:nth-child(1)');
const indi = document.getElementById('indicate');
const indiBox = document.querySelectorAll('#indicate > div');
const win = document.getElementById('window');

const rightNav = document.getElementById('rightNav');


for(let i=0; i<ul.children.length; i++) {
  ul.children[i].addEventListener('click', (event) => {
    let getDataset = event.target.dataset.menu;
    for(let i = 0; i<ul.children.length; i++) {
      if(ul.children[i].dataset.menu === getDataset) {
        main.children[i+1].classList.remove('on');
        ul.children[i].classList.add('select');
      } else {
        main.children[i+1].classList.add('on');
        ul.children[i].classList.remove('select');
      }
    }
    if(ul.children[i].dataset.menu === "1"||ul.children[i].dataset.menu === "2") {
      rightNav.classList.remove('on');
    } else {
      rightNav.classList.add('on');
    }
  });
}

window.addEventListener('wheel',e=> {
  let winY = window.pageYOffset;
  if(winY > sectionHeight+sectionHeight/4) {
    s3h1Text.classList.remove('hidden');
    s3h1Text.classList.add('animationY');
  } else {
    s3h1Text.classList.add('hidden');
    s3h1Text.classList.remove('animationY');
  }
  
  if(winY > sectionHeight+sectionHeight/1.5) {
    win.classList.remove('hidden');
    win.classList.add('animationY');
    indi.classList.remove('hidden');
    indi.classList.add('animationX');
  } else {
    win.classList.add('hidden');
    win.classList.remove('animationY');
    indi.classList.add('hidden');
    indi.classList.remove('animationX');
  }
});



// --------------- section-3 list---------------
const cog = document.getElementById('cog');
console.log(cog);

let cogData = true;

cog.addEventListener('click',e=> {
  if(cogData === true) {
    cog.style.transform = "rotate(0.5turn)";
    cog.style.transition = "1s";



    cogData = false;
  } else {
    cog.style.transform = "rotate(0turn)";
    cog.style.transition = "1s";



    cogData = true;
  }
});