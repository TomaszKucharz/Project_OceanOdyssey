const yachts = document.querySelector(`.yachts`);
const destination = document.querySelector(`.destinations`);
const menuLi = document.querySelector(`.menuLi`);
const contact = document.querySelector(`.contactForUs`);
const bigBtns = [...document.querySelectorAll(`.bigBtn`)];

const handleClik = () => {
	bigBtns.forEach((el) => {
		el.classList.add('yachtOn');
	});
};

yachts.addEventListener(`click`, handleClik);
destination.addEventListener(`click`, handleClik);
menuLi.addEventListener(`click`, showMenu);
contact.addEventListener(`click`, showContact);
