let buttons = document.querySelectorAll("li");
let parags = document.querySelector("p");
const msgs = [
  "racoons ARE AWESOME",
  "black fazzies ARE AWESOME",
  "crows ARE AWESOME",
];
function rstBtns() {
  buttons.forEach((button) => {
    button.classList.remove("selected");
  });
}
buttons.forEach((prps, index) => {
  prps.addEventListener("click", function (evt) {
    evt.preventDefault();
    rstBtns();
    this.classList.add("selected");
    parags.innerHTML = msgs[index];
  });
});
