const helloWorld = document.getElementById('hello-world');
const game = document.getElementById('game');
const btnConfirm = document.getElementById('confirm');
const win = document.getElementById('window');
const qs = document.getElementById('question');

btnConfirm.addEventListener('click', function() {
  helloWorld.classList.add('on');
  game.classList.remove('on');
});


// --------------game ---------------------

const icons = document.getElementById('icon').children;

icons[0].addEventListener('dblclick', function() {
  win.classList.remove('on');
  qs.classList.remove('on');

});