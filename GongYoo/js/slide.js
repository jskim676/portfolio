function slide () {
  const filmLeftBtn = document.getElementsByClassName('leftBtn')[0];
  const filmRightBtn = document.getElementsByClassName('rightBtn')[0];
  const filmList = document.getElementById('filmList');
  const dramaList = document.getElementById('dramaList');

  const clickBtn = (target, leftBtn, rightBtn, number) => {
    let num = 0;
    leftBtn.addEventListener('click',function () {
      if(num > 0) {
        num--;
        target.style.transition = "1s";
        target.style.transform = `translate(-${number*num}%)`;
      }
    });
    rightBtn.addEventListener('click',function () {
      if(num < 3) {
        num++;
        target.style.transition = "1s";
        target.style.transform = `translate(-${number*num}%)`;
      }
    });
  }
  clickBtn(filmList, filmLeftBtn, filmRightBtn, 15);
}

export default slide