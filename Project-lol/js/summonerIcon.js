const ajax = new XMLHttpRequest();
const iconURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-icons.json";
ajax.open('GET', iconURL, false);
ajax.send();
const summonericon = JSON.parse(ajax.response);
const myIcon = document.getElementById('myIcon');
const summoner = document.getElementById('summoner');
const aTeamMember = document.getElementById('aTeamMember');
const bTeamMember = document.getElementById('bTeamMember');

function icon (target) {
  for(let i=0; i<summoner.children.length; i++) {
    const iconNumber = Math.floor(Math.random() * summonericon.length);
    const iconData = summonericon[iconNumber].imagePath;
    const iconIllust = iconData.slice(iconData.indexOf("v1/")+3, iconData.length);
    target.children[i].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + iconIllust;
    myIcon.children[0].src = summoner.children[0].src;
    aTeamMember.children[0].children[0].src = summoner.children[0].src;
  }
}

// icon(summoner);
// setTimeout(() => {icon(summoner)}, 10);
icon(summoner);

function teamSelection (team1, team2) {
  team1.addEventListener('click',(event)=> {
    team1.classList.add('consistOf');
    team2.classList.remove('consistOf');
    let getDataset = event.target.dataset.icon;
    for(j=0; j<team1.children.length; j++) {
      team2.children[j].children[0].classList.add('hidden');
      if(team1.children[j].dataset.icon === getDataset) {
        team1.children[j].children[0].src = summoner.children[0].src;
        team1.children[j].children[0].classList.remove('hidden');
      } else {
        team1.children[j].children[0].classList.add('hidden');
      }
    }
  });
}

teamSelection(aTeamMember, bTeamMember); teamSelection(bTeamMember, aTeamMember); 

