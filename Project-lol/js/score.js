const skinATeamScore = document.getElementById('skinATeamScore');
const skinBTeamScore = document.getElementById('skinBTeamScore');
const skinATeamValue = document.getElementById('skinATeamValue');
const skinBTeamValue = document.getElementById('skinBTeamValue');
const ggATeamScore = document.getElementById('ggATeamScore');
const ggBTeamScore = document.getElementById('ggBTeamScore');
const ggATeamValue = document.getElementById('ggATeamValue');
const ggBTeamValue = document.getElementById('ggBTeamValue');

const skinTimeValue = document.getElementById('skinTimeValue');
const skinTimeBar = document.getElementById('skinTimeBar');
const ggTimeValue = document.getElementById('ggTimeValue');
const ggTimeBar = document.getElementById('ggTimeBar');

function score(team) {
  const scoreBar = document.createElement('div');

  if(team.children.length<9) {
    team.appendChild(scoreBar);
  }
}



function gameTime(barValue, timeValue) {
  let time = 120;
  let min = "";
  let sec = "";
  
  let barPercent = 100;
  barValue.style.width = `${barPercent}%`;
  let percentValue = barPercent/time;
  let percentMultiply = 0;
  
  let timer = setInterval(function() {
    percentMultiply++;
    barValue.style.transition = "1s";
    barValue.style.width = `${barPercent - percentValue*percentMultiply}%`;

    time--;
    min = parseInt(time/60);
    sec = time % 60;
    if(sec < 10) sec = "0" + sec;
    timeValue.innerHTML = min + " : " + sec ;

    if(time<0) {
      clearInterval(timer);
      timeValue.innerHTML = "시간 종료";
      alert('시간 종료');
      playState = true;
      backDropFilter.classList.add('hidden');
    }
  }, 1000);
}

