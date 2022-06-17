const squareURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/ko_kr/v1/champion-summary.json";
ajax.open('GET', squareURL, false);
ajax.send();
const squareKey = JSON.parse(ajax.response).slice(1);
const squareIcon = document.getElementById('squareIcon');

let squareNumber = Math.floor(Math.random()*squareKey.length);
let getData = true;
const squareBtn = document.getElementById('squareBtn');
squareBtn.addEventListener('click',function() {
  if(getData === false) {
    squareIcon.classList.add('hidden');
    squareNumber = Math.floor(Math.random()*squareKey.length); 
    getData = true;
  } else {
    squareIcon.classList.remove('hidden');
    const squareData = squareKey[squareNumber].squarePortraitPath;
    const squareIllust = squareData.slice(squareData.indexOf("assets/")+7,squareData.length);
    squareIcon.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + squareIllust;
    getData = false;
    console.log(squareKey[squareNumber].name);
  }
});
