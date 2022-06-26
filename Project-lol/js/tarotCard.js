  const sectionTarotCard = document.querySelector('#section-tarotCard > div')
  const tarotCard = document.getElementById('tarotCard');
  const tarotBtn = document.getElementById('tarotBtn');
  const tarotResult = document.getElementById('tarotResult');
  const today = document.getElementById('today');

  // 오늘의 날짜
  let day = new Date();   
  let year = day.getFullYear();
  let month = ('0' + (day.getMonth() + 1)).slice(-2);
  let date = ('0' + day.getDate()).slice(-2);
  today.textContent = `${year + '-' + month + '-' + date}`;
  
  let cardState = false;
  const card = tarotCard.children;
  let cardIndex = Math.floor(Math.random()*card.length);


  // 카드 움직임
  for(let i = 0; i < tarotCard.children.length-1; i++) {
    function position () {
      card[i].style.zIndex = i;
      card[i].style.left = `${i*1.6}vw`;
  
      card[i].style.transform = `rotate(${(i-10)}deg)`;
    
      if(i<11) {
        card[i].style.bottom = `${2*i/25}vh`;
      } else {
        card[i].style.bottom = `${(2*(card.length-1-i))/25}vh`;
      }
    }
    position();

    tarotCard.addEventListener('dblclick',function(e) {
      cardState = true;
      let getDataset = e.target.dataset.card;
      if(card[i].dataset.card === getDataset) {
        card[i].style.bottom = "12vh";
        card[i].style.transition = "0.3s";
        card[i].style.transform = "rotate(0deg)";
        card[i].style.zIndex = tarotCard.children.length;
      } else {
        position();
      }
    });

    tarotBtn.addEventListener('click',function() {
      if(cardState === true) {
        card[i].classList.add('hidden');
        sectionTarotCard.classList.add('tarotBgc');
        sectionTarotCard.style.transition = "1s";
        setTimeout(()=>{tarotResult.classList.remove('hidden')},700);
        tarotResult.children[0].children[cardIndex].style.opacity = 1;
      }
    });
  };





