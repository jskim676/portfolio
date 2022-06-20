// 
const skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/skins.json`;
ajax.open('GET', skinURL, false);
ajax.send();
const champions = JSON.parse(ajax.response);
const skinAllData = Object.values(champions);
let skinImg = document.getElementById('skinImg');

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
console.log(skinQuizData);

const backDropFilter = document.getElementById('backDropFilter');

skinImg.children[0].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;



// 시작 버튼 클릭시 스킨 이미지가 나타남
const playBtn = document.getElementById('playBtn');
let playState = true;
playBtn.addEventListener('click', function() {
    if(playState === true) {
      skinImg.classList.remove('hidden');
      gameTime(timeBar, timeValue);
      playState = false;
    } else {
      console.log('test');
      playState = true;
    }
  });
  
  
  // 답을 쓰게 되면 채팅창에 표기되며 정답일시 블러가 제거되고 맞춘 팀의 점수가 오름
  function printName () {
    for(let j=0; j<skinData.length; j++) {
      if(skinData[j].id === skinAnswer) {
        console.log(skinData[j].name);
        const skinInputAnswer = document.getElementById('skinInputAnswer').value;
        const apperAnswer = document.getElementById('appearAnswer');
        if(apperAnswer.children.length >= 0) {
          const answerBox = document.createElement('div');
          apperAnswer.appendChild(answerBox);
          answerBox.classList.add('answerBox');
          answerBox.innerText = skinInputAnswer;
          if(skinData[j].name === skinInputAnswer) {
            backDropFilter.classList.add('hidden');
            alert('정답입니다');

            // setTimeout(function(){
            //   skinQuizData = Math.floor(Math.random()*skinData.length);
            //   let skinQuizRoute = skinData[skinQuizData].splashPath;
            //   let skinIllust = skinQuizRoute.slice(skinQuizRoute.indexOf("v1/")+3, skinQuizRoute.length);
            //   let skinAnswer = parseInt(skinQuizRoute.slice(skinQuizRoute.lastIndexOf("/")+1, skinQuizRoute.length-4));
            //   let skinImg = document.getElementById('skinImg');
            //   skinImg.children[0].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;
            // }, 1000);

            if(aTeamMember.classList.contains('consistOf')) {
              score(aTeamScore);
              aTeamValue.innerText = `${aTeamScore.children.length} / 9`;
            } else if (bTeamMember.classList.contains('consistOf')){
              score(bTeamScore);
              bTeamValue.innerText = `${bTeamScore.children.length} / 9`;
            }
          }
        }
      }
    }
  }
