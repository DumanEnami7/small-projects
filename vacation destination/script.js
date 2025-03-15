let inputs = document.querySelectorAll("input");
let btnSubmit = document.querySelector("button");
let contain = document.querySelector(".wishList");
btnSubmit.addEventListener("click", function () {
  let info = [
    // destination
    inputs[0].value,
    // location
    inputs[1].value,
    // photo url
    inputs[2].value,
    // descriptiion
    inputs[3].value,
  ];
  let card = document.createElement("div");
  card.setAttribute("class", "itm");
  let name = document.createElement("h3");
  name.innerHTML = info[0];
  let loc = document.createElement("h5");
  loc.innerHTML = info[1];
  let img = document.createElement("img");
  img.src = info[2];
  let desc = document.createElement("p");
  desc.innerHTML = info[3];
  let removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "rmCard");
  removeBtn.innerHTML = "Remove";
  removeBtn.addEventListener("click", function () {
    let parent = removeBtn.parentElement;
    parent.remove();
  });
  let appendings = [img, name, loc, desc, removeBtn];
  // card.appendChild(appendings[2]);
  // card.appendChild(appendings[0]);
  // card.appendChild(appendings[1]);
  // card.appendChild(appendings[3]);
  for (let i = 0; i < appendings.length; i++) {
    card.appendChild(appendings[i]);
    // inputs[i].innerHTML = "";
  }
  // for (let j = 0; j<appendings.length; j++){
  //   appendings[j].innerHTML = ""
  // }
  contain.appendChild(card);
});
