const ajax = new XMLHttpRequest();
const iconURL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons.json";
ajax.open('GET', iconURL, false);
ajax.send();
const summonericon = JSON.parse(ajax.response);
const myIcon = document.getElementById('myIcon');
const summoner = document.getElementById('summoner');
const skinATeamMember = document.getElementById('skinATeamMember');
const skinBTeamMember = document.getElementById('skinBTeamMember');
const ggATeamMember = document.getElementById('ggATeamMember');
const ggBTeamMember = document.getElementById('ggBTeamMember');

const iconlist = Array.from(summonericon);
const iconValue = [];

for(let i=0; i<summonericon.length; i++) {
  if(iconlist[i].iconPath !== undefined) {
    iconValue.push(iconlist[i].iconPath);
  }
}


// 소환사 아이콘을 불러와 배치시킨다.
for(let j=0; j<summoner.children.length; j++) {
  let iconNumber = Math.floor(Math.random()*iconValue.length);
  let iconData = iconValue[iconNumber];
  let iconIllust = iconData.slice(iconData.indexOf("v1/")+3, iconData.length);
  summoner.children[j].src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/" + iconIllust;
  myIcon.children[0].src = summoner.children[0].src;
  skinATeamMember.children[0].children[0].src = myIcon.children[0].src;
  ggATeamMember.children[0].children[0].src = myIcon.children[0].src;
}

// 팀을 선택할 시에 소환사 아이콘이 이동되며 그 팀에 속해지는 걸로 된다.
function teamSelection (team1, team2) {
  team1.addEventListener('click',(event)=> {
    team1.classList.add('consistOf');
    team2.classList.remove('consistOf');
    let getDataset = event.target.dataset.icon;
    for(j=0; j<team1.children.length; j++) {
      team2.children[j].children[0].classList.add('hidden');
      if(team1.children[j].dataset.icon === getDataset) {
        team1.children[j].children[0].src = myIcon.children[0].src;
        team1.children[j].children[0].classList.remove('hidden');
      } else {
        team1.children[j].children[0].classList.add('hidden');
      }
    }
  });
}

teamSelection(skinATeamMember, skinBTeamMember); teamSelection(skinBTeamMember, skinATeamMember); 

teamSelection(ggATeamMember, ggBTeamMember); teamSelection(ggBTeamMember, ggATeamMember); 
