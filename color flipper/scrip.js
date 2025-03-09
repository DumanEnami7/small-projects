let btn = document.querySelector("button");
let colorView = document.querySelector(".colorCode");
let cnt = document.querySelector(".content");
btn.addEventListener("click", function () {
  let whole = document.documentElement;
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);
  let mainColor = `background-color: rgb(${num1}, ${num2}, ${num3});`;
  whole.setAttribute("style", mainColor);
  colorView.innerHTML = mainColor;
  let txtCode = `color: rgb(${num1}, ${num2}, ${num3});`;

  colorView.setAttribute("style", txtCode);
});
