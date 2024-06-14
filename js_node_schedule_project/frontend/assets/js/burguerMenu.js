exports.showMenu = () => {
	const menu = document.querySelector('menu');
	const liArray = menu.querySelectorAll('li');
	const liDisplay = liArray[0].classList;

	const widthScreen = window.screen.width;

	if (widthScreen < 769) {
		if (liDisplay.contains('normal')) {
			liArray.forEach((item) => {
				item.classList.remove('normal');
				item.classList.add('display-mobile');
			});
		} else {
			liArray.forEach((item) => {
				item.classList.remove('display-mobile');
				item.classList.add('normal');
				item.classList.add('hidden');
			});
		}
	} else {
		liArray.forEach((item) => item.classList.remove('hidden'));
	}
};
