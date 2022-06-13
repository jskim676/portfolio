const ajax = new XMLHttpRequest();
const iconURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-icons.json";
ajax.open('GET', iconURL, false);
ajax.send();
const summonericon = JSON.parse(ajax.response);
const summoner = document.getElementById('summoner');

function icon (target) {
  for(let i=0; i<summoner.children.length; i++) {
    const iconNumber = Math.floor(Math.random() * summonericon.length);
    const iconData = summonericon[iconNumber].imagePath;
    const iconIllust = iconData.slice(iconData.indexOf("v1/")+3, iconData.length);
    target.children[i].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + iconIllust;
  }
}

// icon(summoner);
setTimeout(() => {icon(summoner)}, 1000);

