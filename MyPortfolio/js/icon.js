function iconClick (target, win, btn) {
  target.addEventListener('dblclick', function() {
    num++;
    win.children[0].style.zIndex = num;
    win.classList.remove('hidden');
    
    const createProgram = (name, icon, text) => {
      programName.program.appendChild(name);
      name.classList.add('window-style');
      name.appendChild(icon);
      name.appendChild(text);
      if(name === programName.Name1) {
        name.setAttribute('id','curriculum-taskBar');
        icon.setAttribute("src", "./img/win98_icon/curriculum_icon.svg");
        text.textContent = "Curriculum";
      } else if (name === programName.Name2) {
        name.setAttribute('id','portfolio-taskBar');
        icon.setAttribute("src", "./img/win98_icon/portfolio_icon.svg");
        text.textContent = "Portfolio";
      } else {
        name.setAttribute('id','contact-taskBar')
        icon.setAttribute("src", "./img/win98_icon/contact_icon.svg");
        text.textContent = "Contact";
      }
      name.addEventListener('click', function() {
        num++;
        win.children[0].style.zIndex = num+1;
      });
      btn.addEventListener('click',e=> {
        win.classList.add('hidden');
        name.parentNode.removeChild(name);
      });
    }

    createProgram(programName.Name1, programName.Name1Icon, programName.Name1Text);
    createProgram(programName.Name2, programName.Name2Icon, programName.Name2Text);
    createProgram(programName.Name3, programName.Name3Icon, programName.Name3Text);
  
    startWin.classList.add('hidden');
    isStatus = true;
  }); 
}

iconClick(icons[1], win.cc, winBtn.cc); iconClick(icons[2], win.pf, winBtn.pf); iconClick(icons[3], win.ct, winBtn.ct);