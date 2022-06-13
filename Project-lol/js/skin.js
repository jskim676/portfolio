const skinURL = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/skins.json`;
ajax.open('GET', skinURL, false);
ajax.send();
const champions = JSON.parse(ajax.response);
const skinData = Object.values(champions);
const skinQuizData = Math.floor(Math.random()*skinData.length);
const skinQuizRoute = skinData[skinQuizData].splashPath;
const skinIllust = skinQuizRoute.slice(skinQuizRoute.indexOf("v1/")+3, skinQuizRoute.length);
const skinAnswer = parseInt(skinQuizRoute.slice(skinQuizRoute.lastIndexOf("/")+1, skinQuizRoute.length-4));
const skinImg = document.getElementById('skinImg');
// // uncenteredSplashPath

for(let i=0; i<skinImg.children.length; i++) {
  skinImg.children[i].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + skinIllust;
}

console.log(skinQuizRoute);
console.log(skinAnswer);
console.log(skinData);

for(let j=0; j<skinData.length; j++) {
  if(skinData[j].id === skinAnswer) {
    console.log(skinData[j].name);
  }
}