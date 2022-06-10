const championChoice = document.getElementById('championChoice');

const loadScreenValue = [];


for(let i=0; i<championChoice.children.length; i++) {
  const randomLoadChampion = championsList[Math.floor(Math.random()*championsList.length)].id;
  loadScreenValue.push(randomLoadChampion.toLowerCase());
  championChoice.children[i].src = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${loadScreenValue[i]}/skins/base/${loadScreenValue[i]}loadscreen.jpg`;
}

