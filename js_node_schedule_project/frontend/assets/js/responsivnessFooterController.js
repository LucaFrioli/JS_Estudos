exports.footerControll = () => {
	const contentHeight = document.querySelector('main').offsetHeight;
	const windowHeight = window.innerHeight;
	const footer = document.querySelector('footer');
	const footerHeight = footer.offsetHeight;

	if (contentHeight < windowHeight - footerHeight) {
		footer.style.position = 'fixed';
		footer.style.bottom = 0;
	} else {
		footer.style.position = '';
		footer.style.bottom = '';
	}
};
