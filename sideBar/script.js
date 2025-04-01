$("button.openBar").click(function () {
  $(".sideBar").toggleClass("showBar");
});
// hide everything
$(".sideBar div ul").hide();
$(".sideBar div h4").click(function (evt) {
  evt.preventDefault();
  // next sibling
  const clickedMenu = $(this).next("ul");

  // hide everything except the one we clicked
  $(".sideBar div ul").not(clickedMenu).hide();

  // Toggle just this menu
  clickedMenu.toggle();
});
$(".clsAll").click(function () {
  $("ul").removeClass("showItm");
});
