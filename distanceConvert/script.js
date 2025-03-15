let btn = document.querySelector("button");
let resultContainer = document.querySelector(".result");
let conType = "mile";
let header = document.querySelector("h2");
// switching the conversion types
document.addEventListener("keypress", function (evt) {
  if (evt.key === "k") {
    header.innerHTML = "Kilometer to Miles converter";

    conType = "kilometer";
  } else if (evt.key === "m") {
    header.innerHTML = "Miles to Kilometer converter";
    conType = "mile";
  }
  return conType;
});
// kilometer to miles
btn.addEventListener("click", function () {
  if (conType === "mile") {
    let inputVal = parseFloat(document.querySelector("input").value);

    // Number(inputVal);
    if (inputVal) {
      let result = inputVal / 0.62137;
      result = result.toFixed(3);
      resultContainer.innerHTML = `${inputVal} Kilometers convert to ${result} Miles`;
    } else {
      alert(`${inputVal} is not a number`);
    }
  }
  // miles to kilometers

  if (conType === "kilometer") {
    let inputVal = parseFloat(document.querySelector("input").value);
    // alert();
    // Number(inputVal);
    if (inputVal) {
      let result = inputVal * 0.62137;
      result = result.toFixed(3);
      resultContainer.innerHTML = `${inputVal} Kilometers convert to ${result} Miles`;
    } else {
      alert(`${inputVal} is not a number`);
    }
  }
});
