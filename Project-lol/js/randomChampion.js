const championChoice = document.getElementById('championChoice');
const randomLoadScreenData = [];
const reroll = document.querySelector('#reroll > button');

for(let i=0; i<skinData.length; i++) {
  if(skinData[i].id%1000 === 0) {
    randomLoadScreenData.push(skinData[i].loadScreenPath);
  }
}


reroll.addEventListener('click',function() {
  championChoice.classList.remove('hidden');
  const lsData = [];
  let idx = 0;
  for(let j=0; j<championChoice.children.length; j++) {
    idx = Math.floor(Math.random()*randomLoadScreenData.length);
    lsData.push(randomLoadScreenData[idx]);
    randomLoadScreenData.splice(idx,1);
    
    let upperCaseLsPath = randomLoadScreenData[Math.floor(Math.random() * championsList.length)];
    let lowerCaseLsPath = upperCaseLsPath.toLowerCase();
    let lsIllust = lowerCaseLsPath.slice(lowerCaseLsPath.indexOf("assets/")+7, lowerCaseLsPath.length);
    championChoice.children[j].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/" + lsIllust;

  }
  console.log(lsData);
});

