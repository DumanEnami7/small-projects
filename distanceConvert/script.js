let btn = document.querySelector("button");
let resultContainer = document.querySelector(".result");
btn.addEventListener("click", function () {
  let inputVal = parseFloat(document.querySelector("input").value);
  // Number(inputVal);
  if (inputVal) {
    let result = inputVal * 0.62137;
    result = result.toFixed(3);
    resultContainer.innerHTML = `${inputVal} Kilometers convert to ${result} Miles`;
  } else {
    alert(`${inputVal} is not a number`);
  }
});
