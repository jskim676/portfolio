  const tarotCard = document.getElementById('tarotCard');
// 카드가 중앙에 오지 않음


  for(let i = 0; i < tarotCard.children.length; i++) {
    const card = tarotCard.children
    card[i].style.zIndex = i;
    card[i].style.left = `${i*1.6}vw`;

    card[i].style.transform = `rotate(${(i-10)}deg)`;
  
    if(i<11) {
      card[i].style.bottom = `${2*i/15}vh`;
    } else {
      card[i].style.bottom = `${(2*(card.length-1-i))/15}vh`;
    }

    card[i].addEventListener('dblclick', function() {
      card[i].style.top = "0vh";
    });
  };
