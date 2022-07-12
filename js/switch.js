const sun = document.querySelector(`.fa-sun`);
const moon = document.querySelector(`.fa-moon`);
const body = document.querySelector(`body`);

const showDark = () => {
  body.setAttribute(`data-mode`, "dark");
  moon.style.display = "none";
  sun.style.display = "block";
};
const showLight = (params) => {
  body.setAttribute(`data-mode`, "light");
  moon.style.display = "block";
  sun.style.display = "none";
};

sun.addEventListener(`click`, showLight);
moon.addEventListener(`click`, showDark);
