import { icons, programName, qs, qsmark, idSet , src, textContent ,gameWinBtn, fullGameWinBtn} from "./script.js";

function iconClick (target, win, btn, num) {
  target.addEventListener('dblclick', function() {
    num++;
    win.children[0].style.zIndex = num;
    win.classList.remove('hidden');

    const createProgram = (name, icon, text) => {
      programName.program.appendChild(name);
      name.classList.add('window-style');
      name.appendChild(icon);
      name.appendChild(text);

      if(name === programName.Name0) {
        name.setAttribute('id',`${idSet.zero}`);
        icon.setAttribute("src", `${src.zero}`);
        text.textContent = `${textContent.zero}`;
      } else if(name === programName.Name1) {
        name.setAttribute('id',`${idSet.one}`);
        icon.setAttribute("src", `${src.one}`);
        text.textContent = `${textContent.one}`;
      } else if (name === programName.Name2) {
        name.setAttribute('id',`${idSet.two}`);
        icon.setAttribute("src", `${src.two}`);
        text.textContent = `${textContent.two}`;
      } else if (name === programName.Name3) {
        name.setAttribute('id',`${idSet.three}`)
        icon.setAttribute("src", `${src.three}`);
        text.textContent = `${textContent.three}`;
      }

      name.addEventListener('click', function() {
        num++;
        win.children[0].style.zIndex = num;
      });

      btn.addEventListener('click',function () {
        if(name.parentNode !== null) {
          win.classList.add('hidden');
          name.parentNode.removeChild(name);
        }
      });
    }

    if(target === icons[0]) {
      if(document.querySelector(`#${idSet.zero}`) === null) {
        qs.classList.remove('hidden');
        qsmark.classList.remove('hidden');
        createProgram(programName.Name0, programName.Name0Icon, programName.Name0Text);
      }
    } else if(target === icons[1]) {
      if(document.querySelector(`#${idSet.one}`) === null) {
        createProgram(programName.Name1, programName.Name1Icon, programName.Name1Text);
      }
    } else if (target === icons[2]) {
      if(document.querySelector(`#${idSet.two}`) === null) {
        createProgram(programName.Name2, programName.Name2Icon, programName.Name2Text);
      }
    } else if (target === icons[3]) {
      if(document.querySelector(`#${idSet.three}`) === null) {
        createProgram(programName.Name3, programName.Name3Icon, programName.Name3Text);
      }
    }
  }); 
}

export default iconClick