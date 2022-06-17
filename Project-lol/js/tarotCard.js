  const tarotCard = document.getElementById('tarotCard');
// 카드가 중앙에 오지 않음


  for(let i = 0; i < tarotCard.children.length; i++) {
    tarotCard.children[i].style.zIndex = i;
    tarotCard.children[i].style.left = `${i/2}vw`;

    // tarotCard.children[i].style.transform = `rotate(${i-11}deg)`;

    // if (i <= 10) {
    //   tarotCard.children[i].style.bottom = `${i/2}vh`;
    // }

    tarotCard.children[i].addEventListener('mouseover',function(){
      tarotCard.children[i].style.top = "2vh";
      tarotCard.children[i].style.zIndex = `${tarotCard.children.length}`;
    }); 

    tarotCard.children[i].addEventListener('mouseout',function(){
      tarotCard.children[i].style.zIndex = i;
    }); 
  };
