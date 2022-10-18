let square1 = document.querySelector(".square-1")
let square2 = document.querySelector(".square-2")
let square3 = document.querySelector(".square-3")
let square4 = document.querySelector(".square-4")
let dx=0
let dy=0
let dz=0

let val = 0


document.addEventListener("scroll", function scroll() {
  const box = document.querySelector('.square-1');
  const rect = box.getBoundingClientRect();
  console.log(rect.y);

  if(rect.y < 0) {  
      square1.style.transform = 'translate3d(' + dx + 'px, ' + window.scrollY * 1.1 + 'px,' + dz + 'px)';
      square2.style.transform = 'translate3d(' + dx + 'px, ' + window.scrollY * 1.2 + 'px,' + dz + 'px)';
      square3.style.transform = 'translate3d(' + dx + 'px, ' + window.scrollY * 1.3 + 'px,' + dz + 'px)';
      square4.style.transform = 'translate3d(' + dx + 'px, ' + window.scrollY * 1.1 + 'px,' + dz + 'px)';

  }
})


// document.addEventListener('scroll', evt => {
//   st = window.scrollY;
//   // this does the actual translation
//   translateSquares();
// });


// setInterval(
//   function scroll() {
//     console.log(window.scrollY)
    
//     square1.style.transform = 'translate3d(' + dx + 'px, ' + scrollY * 1.2 + 'px,' + dz + 'px)';
//   }
//   , 1)




// let st = window.scrollY;
// const squares = document.getElementsByClassName('square');
// const square1 = document.querySelector('square-1');
// const square2 = document.querySelector('square-2');
// const square3 = document.querySelector('square-3');
// const square4 = document.querySelector('square-4');
// const square5 = document.querySelector('square-5');

// // this is just for fun
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(
//       Math.random() * 16
//       )];
//   }
//   return color;
// }

// function translateSquare1(sq_el) {
//   const dx = 0;
//   const dy = -st;
//   const dz = parseInt(sq_el.dataset.distance, 10) || 1;

//   squares.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px,' + dz + 'px)';
// }

// function translateSquare(sq_el) {
//   const dx = 0;
//   const dy = -st;
//   const dz = parseInt(sq_el.dataset.distance, 10) || 1;

//   sq_el.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px,' + dz + 'px)';
// }

// function translateSquares() {
//   Array.from(squares).map(sq => translateSquare(sq));
// }

// function initSquare(sq_el) {
//   sq_el.style.backgroundColor = getRandomColor();
//   sq_el.style.visibility = "visible";
//   sq_el.style.opacity = 1;
// }

// function initSquares() {
//   Array.from(squares).map(sq => initSquare(sq)).map(sq => translateSquares(sq));
// }

// document.addEventListener('scroll', evt => {
//   st = window.scrollY;

//   // this does the actual translation
//   translateSquares();
// });

// initSquares();