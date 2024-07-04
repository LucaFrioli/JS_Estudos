export default (domListCheckboxes, domListLabels) => {
	// const mapping = new Map();
	const array = [];
	// itera sobre as domList saparando os formulários e ciando objetos literais que serão posteriormente adicionados em um array para salvar em local storage
	// eslint-disable-next-line prefer-const
	for (let i = 0; i < domListCheckboxes.length; i++) {
		// eslint-disable-next-line prefer-const
		let obj = {
			id: domListCheckboxes[i].id,
			relized: domListCheckboxes[i].checked,
			info: domListLabels[i].innerHtml
		};
		array.push(obj);
	}

	return array;
};
