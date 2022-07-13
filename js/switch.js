const sun = document.querySelector(`.fa-sun`);
const moon = document.querySelector(`.fa-moon`);
const body = document.querySelector(`body`);

const showDark = () => {
  body.setAttribute(`data-mode`, "dark");
  moon.classList.toggle(`lightOff`);
  sun.classList.toggle(`lightOff`);
};
const showLight = () => {
  body.setAttribute(`data-mode`, "light");
  moon.classList.toggle(`lightOff`);
  sun.classList.toggle(`lightOff`);
};

sun.addEventListener(`click`, showLight);
moon.addEventListener(`click`, showDark);
