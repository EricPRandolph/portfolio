let slideIntervalOne;
let slideIntervalTwo;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.prev1').addEventListener('click', () => {
    resetIntervalOne();
    plusDivsOne(-1);
  });
  document.querySelector('.next1').addEventListener('click', () => {
    resetIntervalOne();
    plusDivsOne(1);
  });

  document.querySelector('.prev2').addEventListener('click', () => {
    resetIntervalTwo();
    plusDivsTwo(-1);
  });
  document.querySelector('.next2').addEventListener('click', () => {
    resetIntervalTwo();
    plusDivsTwo(1);
  });

  startIntervalOne();
  startIntervalTwo();
});

var slideIndexOne = 1;
var slideIndexTwo = 1;
showDivsOne(slideIndexOne);
showDivsTwo(slideIndexTwo);

function plusDivsOne(n) {
  showDivsOne(slideIndexOne += n);
}

function showDivsOne(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndexOne = 1}
  if (n < 1) {slideIndexOne = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexOne-1].style.display = "block";
}

function startIntervalOne() {
  slideIntervalOne = setInterval(() => plusDivsOne(1), 3000);
}

function resetIntervalOne() {
  clearInterval(slideIntervalOne);
  startIntervalOne();
}


function plusDivsTwo(n) {
  showDivsTwo(slideIndexTwo += n);
}

function showDivsTwo(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndexTwo = 1}
  if (n < 1) {slideIndexTwo = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndexTwo-1].style.display = "block";
}

function startIntervalTwo() {
  slideIntervalTwo = setInterval(() => plusDivsTwo(1), 3000);
}

function resetIntervalTwo() {
  clearInterval(slideIntervalTwo);
  startIntervalTwo();
}