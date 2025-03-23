$("button").click(function () {
  $(".sideBar").toggleClass("showBar");
});
$(".sideBar div").click(function (evt) {
  evt.preventDefault();
  $(this).children("ul").toggleClass("showItm");
});
