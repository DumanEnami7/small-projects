const ops = document.querySelectorAll("button");
let input = document.querySelector("input");
let val = "";
ops.forEach((btn) => {
  btn.addEventListener("click", function () {
    let cnt = btn.innerHTML;
    // console.log(cnt);
    input.value += cnt;
    val = input.value;
    if (this.innerHTML === "Cs") {
      input.value = "";
    } else if (val.includes("Correct")) {
      input.value = val.slice(0, input.value.length - 8);
    }

    console.log(eval(val));
  });
});
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter" || evt.key === "=") {
    input.value = eval(val);
  } else if (evt.key === "Delete") {
    input.value = "";
  }
  if (evt.key === "Backspace") {
    input.value += "correct";
    input.value = input.value.slice(0, input.value.length - 8);
  }
});
