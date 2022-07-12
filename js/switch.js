const sun = document.querySelector(`.fa-sun`);
const moon = document.querySelector(`.fa-moon`);

const showDark = () => {
  sun.classList.toggle(`light`);
  moon.classList.toggle(`light`);
};
const showLight = () => {
  sun.classList.toggle(`light`);
  moon.classList.toggle(`light`);
};

sun.addEventListener(`click`, showDark);
moon.addEventListener(`click`, showLight);
