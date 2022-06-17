const championChoice = document.getElementById('championChoice');
const randomLoadScreenData = [];
const reroll = document.querySelector('#reroll > button');

for(let i=0; i<skinAllData.length; i++) {
  if(skinAllData[i].id%1000 === 0) {
    randomLoadScreenData.push(skinAllData[i].loadScreenPath);
  }
}

reroll.addEventListener('click',function() {
  championChoice.classList.remove('hidden');
  let lsData = [];
  let idx = 0;
  for(let j=0; j<championChoice.children.length; j++) {
    idx = Math.floor(Math.random()*randomLoadScreenData.length);
    if(lsData.indexOf(idx) === -1) {
      lsData.push(randomLoadScreenData[idx]);
    } else {
      j--
    }
    let lowerCaseLsPath = lsData[j].toLowerCase();
    let lsIllust = lowerCaseLsPath.slice(lowerCaseLsPath.indexOf("assets/")+7, lowerCaseLsPath.length);
    championChoice.children[j].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + lsIllust;
  }
});
