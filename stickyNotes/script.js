const btnShowMenu = document.querySelector(".addNote");
let note = document.getElementById("noteAdding");
const btnStick = document.querySelector(".stickNote");
btnShowMenu.addEventListener("click", function () {
  note.classList.add("noteArea");
});
function randomColor() {
  let operators = "+-/*";
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);

  let colorTxt = `rgb(${num1},${num2} ,${num3})`;
  return colorTxt;
}
btnStick.addEventListener("click", function () {
  // alert("ihjh");
  let input = document.querySelector("input");
  let page = document.documentElement;
  let container = document.querySelector(".container");
  let inputVal = input.value;
  let notePaper = document.createElement("div");
  let colorCode = randomColor();
  console.log(colorCode);
  notePaper.style.backgroundColor = colorCode;
  notePaper.innerHTML = `<p>${inputVal}</p>`;
  container.appendChild(notePaper);
  input.innerHTML = "";
  note.classList.remove("noteArea");
  notePaper.classList.add("notes");
  // notePaper.style.position = "absoulute";
});
