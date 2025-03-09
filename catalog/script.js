const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];
let currentImg = 0;
const next = document.getElementById("next");
next.addEventListener("click", nextPhoto);
let imagesLen = images.length;
function nextPhoto() {
  if (currentImg < 0) {
    currentImg = 0;
  }
  currentImg++;
  document.getElementById("imageShow").src = images[currentImg];
  if (currentImg === imagesLen) {
    currentImg = 0;
    document.getElementById("imageShow").src = images[currentImg];
  }
}
const previous = document.getElementById("previous");
previous.addEventListener("click", prevPhoto);
function prevPhoto() {
  currentImg = currentImg - 1;
  document.getElementById("imageShow").src = images[currentImg];
  if (currentImg < 0) {
    currentImg = imagesLen - 1;
    document.getElementById("imageShow").src = images[imagesLen - 1];
  }
}
