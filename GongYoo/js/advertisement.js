function ad () {
  const slider = Array.from(document.getElementsByClassName('slider'));

  let translateValue = 0;
  const timer = setInterval(()=> {
    translateValue++;
    slider[0].style.transform = `translate(-${translateValue*100}%)`;
    slider[1].style.transform = `translate(-${translateValue*25}%)`;
    if(translateValue >= slider[0].children.length-1) {
      translateValue = -1;
    }

    // slider[1].style.transform = `translate(-${translateValue*25}%)`;
    // if(translateValue >= slider[1].children.length-1) {
    //   translateValue = -1;
    // }
  },5000);
}

export default ad