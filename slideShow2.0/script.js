const btns = document.querySelectorAll("button");
let imgParent = document.querySelector(".imagePlace");
let imgCounter = 0;
const imgPaths = [
  "images/posterN.jpg",
  "images/slayer.jpg",
  "images/system.jpg",
];
document.querySelector("img").src = imgPaths[imgCounter];
btns[0].addEventListener("click", function () {
  imgCounter++;
  let img = document.querySelector("img");
  img.classList.add("fading");
  setTimeout(() => {
    img.remove();
    let newImg = document.createElement("img");
    newImg.src = imgPaths[imgCounter];
    imgParent.appendChild(newImg);

    console.log(imgCounter);
  }, 3000);

  if (imgCounter >= imgPaths.length) {
    imgCounter = 0;
  }
});
btns[1].addEventListener("click", function () {
  let img = document.querySelector("img");

  img.classList.add("fading");
  setTimeout(() => {
    imgCounter--;
    img.remove();
    let newImg = document.createElement("img");
    newImg.src = imgPaths[imgCounter];
    imgParent.appendChild(newImg);
    if (imgCounter < 0) {
      imgCounter = 3 - 1;
      newImg.src = imgPaths[imgCounter];
    }
  }, 2000);
});
