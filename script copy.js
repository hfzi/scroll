let st = window.scrollY;
const squares = document.getElementsByClassName('square');

// this is just for fun
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(
      Math.random() * 16
      )];
  }
  return color;
}

function translateSquare(sq_el) {
  const dx = 0;
  const dy = -st;
  const dz = parseInt(sq_el.dataset.distance, 10) || 1;

  sq_el.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px,' + dz + 'px)';
}

function translateSquares() {
  Array.from(squares).map(sq => translateSquare(sq));
}

function initSquare(sq_el) {
  sq_el.style.backgroundColor = getRandomColor();
  sq_el.style.visibility = "visible";
  sq_el.style.opacity = 1;
}

function initSquares() {
  Array.from(squares).map(sq => initSquare(sq)).map(sq => translateSquares(sq));
}

document.addEventListener('scroll', evt => {
  st = window.scrollY;

  // this does the actual translation
  translateSquares();
});

initSquares();