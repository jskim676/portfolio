import { gameWin, gameWinBtn, fullGameWin, fullGameWinBtn, qs, qsmark, programName } from "./script.js";

function fullMode () {
  let fullmode = false;
  let num = 100;
  
  // 최소화 버튼
  const minimize = (minBtn) => {
    minBtn.addEventListener('click', function ()  {
      if(fullmode === false) {
        gameWin.classList.remove('hidden');
        qs.classList.remove('hidden');
      } else {
        fullGameWin.classList.remove('hidden');
        qs.classList.remove('hidden');
      }
      if(minBtn === gameWinBtn[0]) {
        gameWin.classList.add('hidden');
        qs.classList.add('hidden');
      }
    });
  }

  minimize(gameWinBtn[0]);
  minimize(programName.Name0);

  // 최대화 버튼
  const maximize = (maxBtn,event, remove, add, mode) => {
    maxBtn.addEventListener(`${event}`, function ()  {
      remove.classList.remove('hidden');
      add.classList.add('hidden');
      num++;
      fullGameWin.children[0].style.zIndex = num;
      fullmode = mode;
    });
  }

  maximize(gameWinBtn[1], 'click',  fullGameWin, gameWin, true);
  maximize(document.querySelector('.smallTopBar'), 'dblclick', fullGameWin, gameWin, false);
  maximize(fullGameWin.children[0].children[0], 'dblclick', gameWin, fullGameWin, false);
  maximize(fullGameWinBtn[1], 'click', gameWin, fullGameWin, false);

  // X 버튼
  const xBtn = (xBtn,win) => {
    xBtn.addEventListener('click', function () {
      win.classList.add('hidden');
      qs.classList.add('hidden');
      qsmark.classList.add('hidden');
      programName.Name0.parentNode.removeChild(programName.Name0);
    });
  }
  xBtn(gameWinBtn[2], gameWin);
  xBtn(fullGameWinBtn[2], fullGameWin);
}

export default fullMode