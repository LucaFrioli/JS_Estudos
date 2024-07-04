import { readDataLocalStorage } from './localStorage';

export default () => {
	// recupera toda a informação contida em localstorage e transforma em uma estrutura de dados que pode ser manipulada
	const dataString = readDataLocalStorage();
	const pureData = JSON.parse(dataString);

	// realiza uma filtrgaem trazendo apenas aquelas tarefas que foram concluidas
	const checkedList = pureData.filter((el)=> el.relized === true);
	
	// itera sobre o array filtrado, assinalando e apresentando para o usuário todas as tarefaz já concluidas.
	checkedList.forEach(element => {
		const el = document.querySelector(`input[type="checkbox"]#${element.id}`);
		el.checked = true;
	});
};
