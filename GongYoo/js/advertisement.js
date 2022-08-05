import { sectionTitle } from "./script.js";

function ad () {
  const slider = Array.from(document.getElementsByClassName('slider'));
  let translateValue = 0;

  function slide () {
    translateValue++;
    slider[0].style.transform = `translate(-${translateValue*100}%)`;
    slider[1].style.transform = `translate(-${translateValue*25}%)`;
    if(translateValue >= slider[0].children.length-1) {
      translateValue = -1;
    }
  }

  setInterval(slide,4000);
}

export default ad 