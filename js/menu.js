const yachts = document.querySelector(`.yachts`);
const destination = document.querySelector(`.destinations`);
const menuLi = document.querySelector(`.menuLi`);
const contact = document.querySelector(`.contactForUs`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];

const handleClikYachts = () => {
	bigBtns.forEach((el) => {
		if (el.classList.contains(`yacht`)) {
			el.classList.toggle(`yachtOn`);
		} else {
		}
	});
};
const handleClikDestination = () => {};

const clearBtns = () => {};

yachts.addEventListener(`click`, handleClikYachts);
destination.addEventListener(`click`, handleClikDestination);
// menuLi.addEventListener(`click`, showMenu);
// contact.addEventListener(`click`, showContact);
