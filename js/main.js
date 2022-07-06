const banner = document.querySelector(`.banner`);

window.addEventListener(`scroll`, function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    banner.className = `banner off`;
  } else {
    banner.className = `banner on`;
  }
  // if (
  //   document.body.scrollTop > 1078 ||
  //   document.documentElement.scrollTop > 1078
  // ) {
  //   banner.classList.add("changeColor");
  // }
});
