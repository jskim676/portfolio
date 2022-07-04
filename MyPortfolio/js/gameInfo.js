function gameInfo () {
  const gameTime = (icons , time) => {
    let gametimeData = ["League of Legends : 5,720 Hours", "Maplestory : 5,400 Hours", "Mabinogi : 3,500 Hours", "Dead by Daylight : 1,500 Hours", "PUBG : 1,250 Hours", "Apex Legends : 8,00 Hours", "Overwatch : 600 Hours", "Lost Ark : 400 Hours", "Left 4 Dead 2 : 360 Hours", "GTA 5 : 300 Hours", "Team Fortress 2 : 120 Hours", "Monster Hunter:World : 100 Hours"
    ]
    
    for(let i=0; i<gametimeData.length; i++) {
      icons[i].addEventListener('click', function () {
        time.textContent = gametimeData[i];
      });
    }
  }
  gameTime(gameicons,gametime); gameTime(fullGameicons, fullGametime);
  
  
  // 게임을 클릭시 테두리가 생김
  // dataset 값을 대문자로 쓰면 인식하지 못한다
  const iconOutline = (icon) => {
    for(let j=0; j<icon.children.length; j++) {
      icon.addEventListener('click', (event) => {
        let getDataset = event.target.dataset.gameicon;
        if(icon.children[j].dataset.gameicon === getDataset) {
          icon.children[j].classList.add('outLine');
        } else {
          icon.children[j].classList.remove('outLine');
        }
      });
    }
  }
  iconOutline(gameicon); iconOutline(fullGameicon);
}

export default gameInfo