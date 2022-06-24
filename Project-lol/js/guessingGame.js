const squareURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/champion-summary.json";
ajax.open('GET', squareURL, false);
ajax.send();
const squareKey = JSON.parse(ajax.response).slice(1);
const squareIcon = document.getElementById('squareIcon');
const squareBtn = document.getElementById('squareBtn');


let hiddenData = true;
squareBtn.addEventListener('click',function() {
  if(hiddenData === true) {
    squareIcon.classList.remove('hidden');
    hiddenData = false;
  } else {
    squareIcon.classList.add('hidden');
    hiddenData = true;
  }
});

const ggPlayBtn = document.getElementById('ggPlayBtn');
ggPlayBtn.addEventListener('click', function() {
  if(playState === true) {
    squareIcon.classList.add('hidden');
    ggTimeValue.innerHTML = "2 : 00";
    gameTime(ggTimeBar, ggTimeValue);
    playState = null;
  } else if(playState === false) {
    setTimeout(()=> { nextGg() , skinAnswer = nextGg(), gameTime(ggTimeBar, ggTimeValue);}, 2000);
    skinTimeValue.innerHTML = "2 : 00";
    playState = null;
  }
  hiddenData = true;
});

let squareNumber = Math.floor(Math.random()*squareKey.length);
let squareData = squareKey[squareNumber].squarePortraitPath;
let squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
let squareAnswer = parseInt(squareData.slice(squareData.lastIndexOf("/")+1, squareData.length-4));
squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;

// 다음 문제
const nextGg = () => {
  let squareNumber = Math.floor(Math.random()*squareKey.length);
  let squareData = squareKey[squareNumber].squarePortraitPath;
  let squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
  let squareAnswer = parseInt(squareData.slice(squareData.lastIndexOf("/")+1, squareData.length-4));
  squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;
  squareIcon.classList.add('hidden');
  hiddenData = true;

  return squareAnswer
}






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
          setTimeout(()=> { nextGg() , squareAnswer = nextGg();}, 2000);

          if(ggATeamMember.classList.contains('consistOf')) {
            score(ggATeamScore);
            ggATeamValue.innerText = `${ggATeamScore.children.length} / 9`;
          } else if (ggBTeamMember.classList.contains('consistOf')){
            score(ggBTeamScore);
            ggBTeamValue.innerText = `${ggBTeamScore.children.length} / 9`;
          }
        }
        if(skinATeamScore.children.length === 9 || skinBTeamScore.children.length === 9 ){
          alert('게임 종료');
          squareIcon.classList.add('hidden');
          playState = false;
        }
        
      }
    }
  }
}

