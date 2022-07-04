function wheel (target, height, animation) {
  window.addEventListener('wheel',e=> {
    let winY = window.pageYOffset;
    if(winY > height) {
      target.style.opacity = 1;
      target.classList.add(animation);
    } else {
      target.style.opacity = 0;
      target.classList.remove(animation);
    }
  });
}

export default wheel