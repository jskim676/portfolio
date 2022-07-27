import { ul , pageHeight } from "./script.js";

function nav () {

  for(let i=0; i<ul.children.length; i++) {
    ul.children[i].addEventListener('click',function () {
      let value = ul.children[i].dataset.li;
      window.scrollTo({
        top:pageHeight*value,
        behavior:"smooth",
      })
    });
  }
  
  ul.addEventListener('click', e=> {
    let getDataset = e.target.dataset.li;
    if(getDataset !== undefined) {
      for(let i=0; i<ul.children.length; i++) {
        if(ul.children[i].dataset.li === getDataset) {
          ul.children[i].classList.add('select');
        } else {
          ul.children[i].classList.remove('select');
        }
      }
    }
  })
}

export default nav