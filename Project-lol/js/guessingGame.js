const squareURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json";
ajax.open('GET', squareURL, false);
ajax.send();
const squareKey = JSON.parse(ajax.response).slice(1);
const squareIcon = document.getElementById('squareIcon');

let squareNumber = Math.floor(Math.random()*squareKey.length);
let getData = true;
console.log(squareKey);
console.log(squareNumber);
const squareBtn = document.getElementById('squareBtn');
squareBtn.addEventListener('click',function() {
  squareIcon.classList.remove('hidden');
  if(getData === false) {
    squareNumber = Math.floor(Math.random()*squareKey.length);
  }
  const squareData = squareKey[squareNumber].squarePortraitPath;
  const squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
  squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;
  console.log(squareIllust);
  getData = false;
});
