const yachts = document.querySelector(`.yachts`);
const destination = document.querySelector(`.destinations`);
const menuB = document.querySelector(`.menuBar`);
const pageBack = document.querySelector(`.back`);
const contact = document.querySelector(`.contactForUs`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];
// zmienne z main.js
const banner = document.querySelector(`.banner`);
const menuLi = document.querySelector(`.menuLi`);
const offsetForm2 = document.querySelector(`.form2`).offsetTop;
const yachtNice = document.querySelector(`.yachtNice`);
const yachtMoto = document.querySelector(`.yachtMoto`);
const sunny = document.querySelector(`.sunny`);
const cold = document.querySelector(`.cold`);

//scrole---------vv-----
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
    document.body.scrollTop > offsetForm2 - 50 ||
    document.documentElement.scrollTop > offsetForm2 - 50
  ) {
    pageBack.style.visibility = "visible";
  } else {
    pageBack.style.visibility = "hidden";
  }
});
window.addEventListener(`scroll`, function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    menuB.classList.add(`mbOn`);
  } else {
    menuB.classList.remove(`mbOn`);
  }
});
window.addEventListener(`scroll`, function () {
  if (
    document.body.scrollTop > offsetForm2 ||
    document.documentElement.scrollTop > offsetForm2
  ) {
    clearBbtns();
  }
});
//scrole---------^^-----
const handleClickYachts = () => {
  clearList();
  bigBtns.forEach((el) => {
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
      setTimeout(() => {
        el.classList.remove(`yachtOn`, `clearYachtOn`);
      }, 510);
    }
  });
};
const clearList = () => {
  menuB.classList.remove(`moveBar`);
};
const pushBack = () => {
  clearBbtns();
  clearMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const clearBbtns = () => {
  bigBtns.forEach((el) => {
    el.classList.remove("yachtOn");
  });
};
const clearMenu = () => {
  menuB.classList.remove(`moveBar`);
};
//-------vv--jump to form$--vv---------------------
const jumpToForm2 = () => {
  window.scrollTo({ top: offsetForm2, behavior: "smooth" });
};
const jumpToForm3 = () => {
  window.scrollTo({
    top: document.querySelector(`.form3`).offsetTop,
    behavior: "smooth",
  });
};
//-------^^--jump to form$--^^---------------------
//-------------vv---show actions of buttons--vv------------------
const showContact = () => {
  clearMenu();
  //tu wstawić kod włączający widoczność buttona back
  pageBack.style.visibility = "visible";
  const form4 = document.querySelector(`.form4`).offsetTop;
  window.scrollTo({ top: form4, behavior: "smooth" });
};
const showMenu = () => {
  clearBbtns();
  menuB.classList.toggle(`moveBar`);
};
const showYachtNice = () => {
  jumpToForm2();
};
const showYachtMoto = () => {
  jumpToForm2();
};
const showSunny = () => {
  jumpToForm3();
};
const showCold = () => {
  jumpToForm3();
};
//--------------^^--show actions of buttons--^^------------------

yachts.addEventListener(`click`, handleClickYachts);
destination.addEventListener(`click`, handleClickDestination);
contact.addEventListener(`click`, showContact);
pageBack.addEventListener(`click`, pushBack);
menuLi.addEventListener(`click`, showMenu);
yachtNice.addEventListener(`click`, showYachtNice);
yachtMoto.addEventListener(`click`, showYachtMoto);
sunny.addEventListener(`click`, showSunny);
cold.addEventListener(`click`, showCold);
