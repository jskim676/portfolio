const squareURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/champion-summary.json";
ajax.open('GET', squareURL, false);
ajax.send();
const squareKey = JSON.parse(ajax.response).slice(1);
const squareIcon = document.getElementById('squareIcon');

let squareNumber = Math.floor(Math.random()*squareKey.length);
let getData = true;
const squareBtn = document.getElementById('squareBtn');

// squareBtn.addEventListener('click',function() {
//   if(getData === false) {
//     squareIcon.classList.add('hidden');
//     squareNumber = Math.floor(Math.random()*squareKey.length); 
//     getData = true;
//   } else {
//     squareIcon.classList.remove('hidden');
//     let squareData = squareKey[squareNumber].squarePortraitPath;
//     let squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
//     let squareAnswer = parseInt(squareData.slice(squareData.lastIndexOf("/")+1, squareData.length-4));
//     squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;
//     getData = false;
//     console.log(squareAnswer);
//   }
// });

let hiddenData = true;
squareBtn.addEventListener('click',function() {
  if(hiddenData === true) {
    squareIcon.classList.add('hidden');
    hiddenData = false;
  } else {
    squareIcon.classList.remove('hidden');
    hiddenData = true;
  }
});

let squareData = squareKey[squareNumber].squarePortraitPath;
let squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
let squareAnswer = parseInt(squareData.slice(squareData.lastIndexOf("/")+1, squareData.length-4));
squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;


const ggPlayBtn = document.getElementById('ggPlayBtn');
ggPlayBtn.addEventListener('click', function() {
    if(playState === true) {
      squareIcon.classList.remove('hidden');
      gameTime(ggTimeBar, ggTimeValue);
      playState = false;
    } else {
      console.log('test');
      playState = true;
    }
  });



function ggPrintName () {
  for(let j=0; j<squareKey.length; j++) {
    if(squareKey[j].id === squareAnswer) {
      console.log(squareKey[j].name);
      const ggInputAnswer = document.getElementById('ggInputAnswer').value;
      const ggAppearAnswer = document.getElementById('ggAppearAnswer');
      if(ggAppearAnswer.children.length >= 0) {
        const answerBox = document.createElement('div');
        ggAppearAnswer.appendChild(answerBox);
        answerBox.classList.add('answerBox');
        answerBox.innerText = ggInputAnswer;
        if(squareKey[j].name === ggInputAnswer) {
          squareIcon.classList.remove('hidden');
          alert('정답입니다');


          if(ggATeamMember.classList.contains('consistOf')) {
            score(ggATeamScore);
            ggATeamValue.innerText = `${ggATeamScore.children.length} / 9`;
          } else if (ggBTeamMember.classList.contains('consistOf')){
            score(ggBTeamScore);
            ggBTeamValue.innerText = `${ggBTeamScore.children.length} / 9`;
          }
        }
      }
    }
  }
}

  // function ggPrintName () {
  //   for(let j=0; j<squareKey.length; j++) {
  //     if(squareKey[j].id === squareNumber) {
  //       console.log(squareKey.name);
  //     }
  //   }
  // }

