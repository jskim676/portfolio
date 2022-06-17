const aTeamScore = document.getElementById('aTeamScore');
const bTeamScore = document.getElementById('bTeamScore');
const aTeamValue = document.getElementById('aTeamValue');
const bTeamValue = document.getElementById('bTeamValue');
const timeValue = document.getElementById('timeValue');


function score(team) {
  const scoreBar = document.createElement('div');

  if(team.children.length<9) {
    team.appendChild(scoreBar);
  }
}



function timer () {
  let value = 120;
  let time = setInterval(function() {
    let min = Math.floor(value/60);
    let sec = value%60
  },1000);
}