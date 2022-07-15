const yachts = document.querySelector(`.yachts`);
const destination = document.querySelector(`.destinations`);
const menuB = document.querySelector(`.menuBar`);
// const lista = document.querySelector(`.lista`);
const contact = document.querySelector(`.contactForUs`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];

const handleClickYachts = () => {
  clearList();
  bigBtns.forEach((el) => {
    const xxx = el.classList.contains;
    if (
      el.classList.contains(`destination`) & el.classList.contains(`yachtOn`)
    ) {
      el.classList.add(`clearYachtOn`);
      setTimeout(() => {
        el.classList.remove(`yachtOn`, `clearYachtOn`);
      }, 510);
    } else if (el.classList.contains(`yacht`)) {
      el.classList.toggle(`yachtOn`);
    }
  });
};

const handleClickDestination = () => {
  clearList();
  bigBtns.forEach((el) => {
    if (el.classList.contains(`destination`)) {
      el.classList.toggle(`yachtOn`);
    } else if (
      el.classList.contains(`yacht`) & el.classList.contains(`yachtOn`)
    ) {
      el.classList.add(`clearYachtOn`);
      // clearList();
      setTimeout(() => {
        el.classList.remove(`yachtOn`, `clearYachtOn`);
      }, 510);
    }
  });
};

const clearList = () => {
  menuB.classList.remove(`moveBar`);
};

yachts.addEventListener(`click`, handleClickYachts);
destination.addEventListener(`click`, handleClickDestination);
// menuLi.addEventListener(`click`, showMenu);
// contact.addEventListener(`click`, showContact);
