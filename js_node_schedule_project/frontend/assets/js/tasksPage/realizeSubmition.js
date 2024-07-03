import mapStructure from './creatingMapStructuring';

export default (e) => {
	// previne que qualquer tipo de ação ocorra ao botão ser clicado independentemente se ele for adicionada ou não a um formulário
	e.preventDefault();

	// resgata as informações do formulário especifico de tarefas, e após issos todods os inputs de tipo checkbox existentes neste mesmo formulário
	const form = document.querySelector('form#tasksListForm');
	const domListCheckboxes = form.querySelectorAll('input[type="checkbox"]');
	const domListLabels = form.querySelectorAll('label');


	// retorna a estrutura do mapa e o tansforma em string 
	const teste = mapStructure(domListCheckboxes, domListLabels);
	console.log(teste);
	const mappingString = JSON.stringify(teste);
	console.log(mappingString);
};
