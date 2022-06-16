const squareURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-summary.json";
ajax.open('GET', squareURL, false);
ajax.send();
const squareKey = JSON.parse(ajax.response).slice(1);
const squareIcon = document.getElementById('squareIcon');

let squareNumber = 0;
const squareBtn = document.getElementById('squareBtn');
squareBtn.addEventListener('click',function() {
  squareIcon.classList.remove('hidden');
  squareNumber = Math.floor(Math.random()*squareKey.length);
  const squareData = squareKey[squareNumber].squarePortraitPath;
  const squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
  squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;
});
