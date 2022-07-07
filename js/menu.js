const yachts = document.querySelector(`.yachts`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];

const handleClik = (el) => {
  bigBtns.forEach((el) => {
    el.classList.add("yachtOn");
  });
};

yachts.addEventListener(`click`, handleClik);
