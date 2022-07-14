const banner = document.querySelector(`.banner`);
const menuBar = document.querySelector(`.menuBar`);
const menuLi = document.querySelector(`.menuLi`);

window.addEventListener(`scroll`, function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    banner.className = `banner off`;
  } else {
    banner.className = `banner on`;
  }
});
window.addEventListener(`scroll`, function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    menuBar.classList.add(`mbOn`);
  } else {
    menuBar.classList.remove(`mbOn`);
  }
});

const showMenu = () => {
  menuBar.classList.toggle(`moveBar`);
};

menuLi.addEventListener(`click`, showMenu);
