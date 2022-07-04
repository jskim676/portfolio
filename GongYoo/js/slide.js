function slide () {
  const filmLeftBtn = document.getElementsByClassName('leftBtn')[0];
  const filmRightBtn = document.getElementsByClassName('rightBtn')[0];
  const filmList = document.getElementById('filmList');
  const dramaList = document.getElementById('dramaList');
  const dramaLeftBtn = document.getElementsByClassName('leftBtn')[1];
  const dramaRightBtn = document.getElementsByClassName('rightBtn')[1];

  const clickBtn = (target, leftBtn, rightBtn, number, limit) => {
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
  clickBtn(filmList, filmLeftBtn, filmRightBtn, 15 , 3); 
  clickBtn(dramaList, dramaLeftBtn, dramaRightBtn, 21.5 , 1);
}

export default slide