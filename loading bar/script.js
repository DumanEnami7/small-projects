$(".loadingBar")
  .html("THE MACHINE IS ALWAYS ALIVE.")
  .css("display", "flex")
  .css("align-items", "center");

if ($(".loadingBar").offsetHeight === 160) {
  alert();
}
