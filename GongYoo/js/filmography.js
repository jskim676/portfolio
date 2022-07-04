function filmographyTitle () {
  const filmographySelect = document.getElementById('filmographySelect');
  const film = document.getElementById('film');
  const drama = document.getElementById('drama');

  const select = (target, opponent, angle, appear, disappear, number) => {
    target.addEventListener('click',function() {
      filmographySelect.children[0].style.transition = "0.3s";
      target.style.opacity = 1;
      opponent.style.opacity = 0.1;
      filmographySelect.children[1].style.transition = "1s";
      filmographySelect.children[1].style.transform = `rotate(${angle}deg)`;
      filmographySelect.children[2].style.transition = "0.3s";
      appear.classList.remove('on');
      disappear.classList.add('on');
      rotate = number;
    });
  }

  select (filmographySelect.children[0], filmographySelect.children[2], 0, film, drama, 0);
  select (filmographySelect.children[2], filmographySelect.children[0], 180, drama, film, 1);

  // 막대 버튼
  let rotate = 0;
  filmographySelect.children[1].addEventListener('click', function() {
    if(rotate === 0) {
      filmographySelect.children[0].style.transition = "0.3s";
      filmographySelect.children[0].style.opacity = 0.1;
      filmographySelect.children[1].style.transition = "1s";
      filmographySelect.children[1].style.transform = "rotate(180deg)";
      filmographySelect.children[2].style.transition = "0.3s";
      filmographySelect.children[2].style.opacity = 1;
      film.classList.add('on');
      drama.classList.remove('on');
      rotate = 1;
    } else {
      filmographySelect.children[0].style.opacity = 1;
      filmographySelect.children[1].style.transform = "rotate(0deg)";
      filmographySelect.children[2].style.opacity = 0.1;
      film.classList.remove('on');
      drama.classList.add('on');
      rotate = 0;
    }
  });
}

export default filmographyTitle