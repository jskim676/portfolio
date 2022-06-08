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
const h1Text = document.querySelector('#section-2 > div:nth-child(1)');
const img = document.querySelector('#section-2 > div:nth-child(2)');

const {height : sectionHeight} = section2.getBoundingClientRect(); 



window.addEventListener('wheel',e=> {
  let winY = window.pageYOffset;
  if(winY > sectionHeight/4) {
    h1Text.classList.remove('hidden');
    h1Text.classList.add('animation');
  } else {
    h1Text.classList.add('hidden');
    h1Text.classList.remove('animation');
  }
  
  if(winY > sectionHeight/1.5) {
    img.classList.remove('hidden');
    img.classList.add('animation');
  } else {
    img.classList.add('hidden');
    img.classList.remove('animation');
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



for(let i=0; i<ul.children.length; i++) {
  ul.children[i].addEventListener('click', (event) => {
    console.log(main.children[i+1]);
    let getDataset = event.target.dataset.menu;
    console.log(getDataset);
    for(let i = 0; i<ul.children.length; i++) {
      if(ul.children[i].dataset.menu === getDataset) {
        // main.children[i+1].classList.remove('hidden');
        ul.children[i].classList.add('select');
      } else {
        ul.children[i].classList.remove('select');
        // main.children[i+1].classList.add('hidden');
      }
    }
  });
}

// const sectionContent = document.querySelector('section');
// console.log(sectionContent);

// ul.children[0].addEventListener('click', function() {
//   sectionContent.classList.remove('hidden');
// });

// ul.children[1].addEventListener('click', function() {
//   sectionContent.classList.add('hidden');
// });