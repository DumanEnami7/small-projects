let images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];
const imageContainer = document.getElementById("content");
let btns = document.querySelector("#links");
const nextBtn = btns.children[0];
const pervBtn = btns.children[1];
let currentImg = 0;
let slidedImgs = 0;

function chunk(evt) {
  const imgCtn = document.querySelector("#imageCon");
  let newImg = document.createElement("img");
  newImg.src = images[currentImg];
  newImg.setAttribute("class", "fading");
  newImg.setAttribute("id", "imageCon");
  imgCtn.remove();
  console.log(slidedImgs);
  imageContainer.appendChild(newImg);
}

nextBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  currentImg++;
  if (currentImg > images.length - 1) {
    currentImg = 0;
  }
  chunk();
});

pervBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  currentImg--;
  if (currentImg < 0) {
    currentImg = 0;
  }
  chunk();
});
