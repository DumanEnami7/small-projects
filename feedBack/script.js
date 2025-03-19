let btnSubmit = document.querySelector(".submit");
let feeds = document.querySelectorAll(".feed");
for (let i = 0; i < feeds.length; i++) {
  feeds[i].addEventListener("click", function () {
    feeds[i].classList.toggle("clicked");
  });
}
