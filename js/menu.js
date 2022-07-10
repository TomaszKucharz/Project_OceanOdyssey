const yachts = document.querySelector(`.yachts`);
const destination = document.querySelector(`.destinations`);
const menuLi = document.querySelector(`.menuLi`);
const contact = document.querySelector(`.contactForUs`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];

const handleClickYachts = () => {
	bigBtns.forEach((el) => {
		if (el.classList.contains(`yacht`)) {
			el.classList.toggle(`yachtOn`);
		} else if (el.classList.contains(`destination`) & el.classList.contains(`yachtOn`)) {
			el.classList.add(`clearYachtOn`);
		}
	});
};
const handleClickDestination = () => {
	bigBtns.forEach((el) => {
		if (el.classList.contains(`destination`)) {
			el.classList.toggle(`yachtOn`);
		} else if (el.classList.contains(`yacht`) & el.classList.contains(`yachtOn`)) {
			el.classList.add(`clearYachtOn`);
			// bigBtns.forEach((el) => {
			// 	if (el.classList.contains(`clearYachtOn`)) {
			// 		el.classList.remove(`clearYachtOn`);
			// 		el.classList.remove(`yachtOn`);
			// 	}
			// });
		}
	});
};
const clearBtns = () => {};

yachts.addEventListener(`click`, handleClickYachts);
destination.addEventListener(`click`, handleClickDestination);
// menuLi.addEventListener(`click`, showMenu);
// contact.addEventListener(`click`, showContact);
