// 
const skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/skins.json`;
ajax.open('GET', skinURL, false);
ajax.send();
const champions = JSON.parse(ajax.response);
const skinAllData = Object.values(champions);
let skinImg = document.getElementById('skinImg');
const backDropFilter = document.getElementById('backDropFilter');

let skinData = [];
for(let j=0; j<skinAllData.length; j++) {
  if(Object.values(champions)[j].id%1000 !== 0) {
    skinData.push(Object.values(champions)[j]);
  }
}
let skinQuizData = Math.floor(Math.random()*skinData.length);
let skinQuizRoute = skinData[skinQuizData].splashPath;
let skinIllust = skinQuizRoute.slice(skinQuizRoute.indexOf("v1/")+3, skinQuizRoute.length);
let skinAnswer = parseInt(skinQuizRoute.slice(skinQuizRoute.lastIndexOf("/")+1, skinQuizRoute.length-4));
// // uncenteredSplashPath
skinImg.children[0].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;

// 다음 문제
const nextSkin = () => {
  let skinData = [];
  for(let j=0; j<skinAllData.length; j++) {
    if(Object.values(champions)[j].id%1000 !== 0) {
      skinData.push(Object.values(champions)[j]);
    }
  }
  let skinQuizData = Math.floor(Math.random()*skinData.length);
  let skinQuizRoute = skinData[skinQuizData].splashPath;
  let skinIllust = skinQuizRoute.slice(skinQuizRoute.indexOf("v1/")+3, skinQuizRoute.length);
  let skinAnswer = parseInt(skinQuizRoute.slice(skinQuizRoute.lastIndexOf("/")+1, skinQuizRoute.length-4));
  // // uncenteredSplashPath
  skinImg.children[0].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;
  backDropFilter.classList.remove('hidden');
  return skinAnswer
}



// 시작 버튼 클릭시 스킨 이미지가 나타남
const skinPlayBtn = document.getElementById('skinPlayBtn');
let playState = true;
skinPlayBtn.addEventListener('click', function() {
  if(playState === true) {
    skinImg.classList.remove('hidden');
    skinTimeValue.innerHTML = "2 : 00";
    gameTime(skinTimeBar, skinTimeValue);
    playState = null;
  } else if(playState === false) {
    setTimeout(()=> { nextSkin() , skinAnswer = nextSkin(), gameTime(skinTimeBar, skinTimeValue);;}, 2000);
    skinTimeValue.innerHTML = "2 : 00";
    playState = null;
  }
});

  
  
  // 답을 쓰게 되면 채팅창에 표기되며 정답일시 블러가 제거되고 맞춘 팀의 점수가 오름
  function skinPrintName () {
    for(let j=0; j<skinData.length; j++) {
      if(skinData[j].id === skinAnswer) {
        console.log(skinData[j].name);
        const skinInputAnswer = document.getElementById('skinInputAnswer').value;
        const skinAppearAnswer = document.getElementById('skinAppearAnswer');
        if(skinAppearAnswer.children.length >= 0) {
          const answerBox = document.createElement('div');
          skinAppearAnswer.appendChild(answerBox);
          answerBox.classList.add('answerBox');
          answerBox.innerText = skinInputAnswer;
          if(skinData[j].name === skinInputAnswer) {
            backDropFilter.classList.add('hidden');
            alert('정답입니다');
            setTimeout(()=> { nextSkin() , skinAnswer = nextSkin();}, 1500);
            if(skinATeamMember.classList.contains('consistOf')) {
              score(skinATeamScore);
              skinATeamValue.innerText = `${skinATeamScore.children.length} / 9`;
            } else if (skinATeamMember.classList.contains('consistOf')){
              score(skinBTeamScore);
              skinBTeamValue.innerText = `${skinBTeamScore.children.length} / 9`;
            }
          }
          if(skinATeamScore.children.length === 9 || skinBTeamScore.children.length === 9 ){
            alert('게임 종료');
            skinImg.classList.add('hidden');
            playState = false;
          }
        }
      }
    }
  }
