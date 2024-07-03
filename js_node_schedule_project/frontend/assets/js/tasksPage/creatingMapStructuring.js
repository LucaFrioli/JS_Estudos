export default (domListCheckboxes, domListLabels) =>{
	const mapping = new Map();

	// itera sobre as domList saparando os formulários e ciando objetos literais que serão posteriormente adicionados em um array ou map para salvar em local storage
	// eslint-disable-next-line prefer-const
	for (let i = 0; i<domListCheckboxes.length; i++) {
		// eslint-disable-next-line prefer-const
		let objectTest = {
			status: domListCheckboxes[i].checked,
			info : domListLabels[i].innerHTML
		};
		mapping.set(encodeURIComponent(domListCheckboxes[i].id), objectTest);
	}

	return mapping;
}
