const aTeamScore = document.getElementById('aTeamScore');
const bTeamScore = document.getElementById('bTeamScore');
const aTeamValue = document.getElementById('aTeamValue');
const bTeamValue = document.getElementById('bTeamValue');
const timeValue = document.getElementById('timeValue');

const timeBar = document.getElementById('timeBar');


function score(team) {
  const scoreBar = document.createElement('div');

  if(team.children.length<9) {
    team.appendChild(scoreBar);
  }
}



function gameTime(target) {
  let time = 120;
  let min = "";
  let sec = "";
  
  let barPercent = 100;
  timeBar.style.width = `${barPercent}%`;
  let percentValue = barPercent/time;
  let percentMultiply = 0;
  

  let timer = setInterval(function() {
    time--;
    min = parseInt(time/60);
    sec = time % 60;
    if(sec < 10) sec = "0" + sec;
    target.innerHTML = min + " : " + sec ;

    if(time<0) {
      clearInterval(timer);
      target.innerHTML = "시간 종료";
      alert('시간 종료');
    }

    timeBar.style.width = `${}`;


  }, 1000);
}

