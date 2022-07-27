function ad () {
  const slider = Array.from(document.getElementsByClassName('slider'));

  console.log(slider[0].children);

  let translateValue = 0;
  const timer = setInterval(()=> {
    // translateValue++;
    // slider[0].style.transform = `translate(-${translateValue*100}%)`;
  },3000);
}

export default ad