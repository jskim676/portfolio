// 
const skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/skins.json`;
ajax.open('GET', skinURL, false);
ajax.send();
const champions = JSON.parse(ajax.response);
const skinAllData = Object.values(champions);
let skinData = [];
for(let j=0; j<skinAllData.length; j++) {
  if(Object.values(champions)[j].id%1000 !== 0) {
    skinData.push(Object.values(champions)[j]);
  }
}
const skinQuizData = Math.floor(Math.random()*skinData.length);
const skinQuizRoute = skinData[skinQuizData].splashPath;
const skinIllust = skinQuizRoute.slice(skinQuizRoute.indexOf("v1/")+3, skinQuizRoute.length);
const skinAnswer = parseInt(skinQuizRoute.slice(skinQuizRoute.lastIndexOf("/")+1, skinQuizRoute.length-4));
const skinImg = document.getElementById('skinImg');
// // uncenteredSplashPath


const backDropFilter = document.getElementById('backDropFilter');

for(let i=0; i<skinImg.children.length; i++) {
  skinImg.children[i].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;
}

// 답을 쓰게 되면 채팅창에 표기되며 정답일시 블러가 제거되고 알림을 해줌
function printName () {
  for(let j=0; j<skinData.length; j++) {
    if(skinData[j].id === skinAnswer) {
      console.log(skinData[j].name);
      const inputAnswer = document.getElementById('inputAnswer').value;
      const apperAnswer = document.getElementById('appearAnswer');
      if(apperAnswer.children.length >= 0) {
        const answerBox = document.createElement('div');
        apperAnswer.appendChild(answerBox);
        answerBox.classList.add('answerBox');
        answerBox.innerText = inputAnswer;
        if(skinData[j].name === inputAnswer) {
          backDropFilter.classList.add('hidden');
          alert('정답입니다');
        } else {

        }
      }
    }
  }
}

  // 시작 버튼 클릭시 스킨 이미지가 나타남
  const playBtn = document.getElementById('playBtn');
  playBtn.addEventListener('click', function() {
    skinImg.classList.remove('hidden');
  });





