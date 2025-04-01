let lines = document.querySelectorAll(".progressLine");
let btns = document.querySelectorAll("button");
let checks = document.querySelectorAll(".check");
let linecount = 0;
let checkCount = 0;
btns[1].addEventListener("click", function () {
  if (linecount < lines.length) {
    lines[linecount].classList.add("reaching");
    linecount++;
  }
  if (checkCount < checks.length) {
    checks[checkCount].classList.add("checkpntDone");
    checkCount++;
  }
});
