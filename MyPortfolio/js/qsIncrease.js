function qsIncrease (target) {
  let slideStatus = true;
  target.addEventListener('click', e=> {
    if(slideStatus === true) {
      target.style.height = "45vh";
      target.style.transition = "0.5s";
      slideStatus = false;
    } else {
      target.style.height = "10vh";
      slideStatus = true;
    }
  });
}

export default qsIncrease