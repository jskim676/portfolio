const idAppear = document.getElementById('idAppear');
const greeting = document.getElementById('greeting');
const idInputAnswer = document.getElementById('idInputAnswer');
const pwInputAnswer = document.getElementById('pwInputAnswer');
const loginScreen = document.getElementById('loginScreen');
const loginBtn = document.getElementById('loginBtn');
const changeLoginScreen = document.getElementById('changeLoginScreen');


loginBtn.addEventListener('click', function() {
  pwPrintName();
});

function pwPrintName () {
  let userName = idInputAnswer.value;
  if(idInputAnswer.value !== "" & pwInputAnswer.value !== "") {
    idAppear.textContent = userName;
    greeting.textContent = "님 반갑습니다";
    idAppear.classList.add('animation-YFast');
    greeting.classList.add('animation-YFast');
    idAppear.style.transition = "1s";
    greeting.style.transition = "1s";
    idInputAnswer.value = null;
    setTimeout(()=>{greeting.style.opacity = 0;},3000)
    loginScreen.classList.add('hidden');
    changeLoginScreen.classList.remove('hidden');
    myIcon.classList.remove('hidden');
    changeLoginScreen.children[0].children[0].src = summoner.children[0].src;
    changeLoginScreen.children[0].children[1].textContent = userName;
    changeLoginScreen.children[0].classList.add('animation-YFast');
    changeLoginScreen.children[1].classList.add('animation-YFast');
    changeLoginScreen.children[2].classList.add('animation-YFast');
  }
}


const soloRank = document.getElementById('soloRank');
const teamRank = document.getElementById('teamRank');

soloRank.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_baseface_matte.png";
teamRank.src = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_baseface_matte.png";

let srWinRate = soloRank.nextElementSibling.children[1].textContent;
let trWinRate = teamRank.nextElementSibling.children[1].textContent;
let totalGame = Math.floor(Math.random()*(150-100)+100);
let winRate = Math.floor(Math.random()*(100-50)+45);

// srWinRate = '100전 ${winRate}승 ${100-winRate}패';
soloRank.nextElementSibling.children[1].textContent = `${Math.floor(100*winRate/totalGame)}% ${totalGame}전 ${winRate}승 ${totalGame-winRate}패`;

