const checkPoints = document.querySelectorAll(".check");
const lines = document.querySelectorAll(".progressLine");
let checkCount = 0;
let lineCount = -1;
const forBtn = document.querySelector(".next");
const backBtn = document.querySelector(".prev");
forBtn.addEventListener("click", function () {
  checkPoints[checkCount].classList.add("done");
  checkCount++;
  lineCount++;
  lines[lineCount].classList.add("going");
});
