function slideAndHover() {
  const filmList = document.getElementById('filmList');
  const filmLeftBtn = document.getElementsByClassName('leftBtn')[0];
  const filmRightBtn = document.getElementsByClassName('rightBtn')[0];
  const dramaList = document.getElementById('dramaList');
  const dramaLeftBtn = document.getElementsByClassName('leftBtn')[1];
  const dramaRightBtn = document.getElementsByClassName('rightBtn')[1];

  const slide = (target, leftBtn, rightBtn, number, limit) => {
    let num = 0;
    leftBtn.addEventListener('click',function () {
      if(num > 0) {
        num--;
        target.style.transition = "1s";
        target.style.transform = `translate(-${number*num}%)`;
      }
    });
    rightBtn.addEventListener('click',function () {
      if(num < limit) {
        num++;
        target.style.transition = "1s";
        target.style.transform = `translate(-${number*num}%)`;
      }
    });
  }
  slide(filmList, filmLeftBtn, filmRightBtn, 15 , 3); 
  slide(dramaList, dramaLeftBtn, dramaRightBtn, 21.5 , 1);

  const hover = (list) => {
    for(let i=0; i<list.length; i++) {
      list[i].addEventListener('mouseover', e => {
        let getDataset = e.target.dataset.list;
        for(let i=0; i<list.length; i++) {
          if(list[i].children[0].dataset.list === getDataset) {
            list[i].children[0].children[1].classList.remove('hidden');
            list[i].children[0].children[1].classList.add('animationYFast');
            list[i].children[0].children[2].classList.remove('hidden');
            list[i].children[0].children[2].classList.add('animationYFast');
          } else {
            list[i].children[0].children[1].classList.add('hidden');
            list[i].children[0].children[1].classList.remove('animationYFast');
            list[i].children[0].children[2].classList.add('hidden');
            list[i].children[0].children[2].classList.remove('animationYFast');
          }
        }
      });
    }
  }
  hover(filmList.children); hover(dramaList.children);
}

export default slideAndHover