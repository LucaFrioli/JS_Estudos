/* eslint-disable no-undef */

// regularza o nome do item de localstroage, prevenindo eventuais erros de digitação
const localstorageNameItem = 'StatusTaskList';

const saveInLocalStorage = (arr) => {
	// regulariza o array para que seja uma string assim permitindo a inserção correta dentro do localstorage
	const stringedInfoMapped = transformInJson(arr);
	return localStorage.setItem(localstorageNameItem, stringedInfoMapped);
};

const readDataLocalStorage = () => {
	// retorna a string salva para posterior uso
	return localStorage.getItem(localstorageNameItem);
};

function transformInJson(arr) {
	return JSON.stringify(arr);
}

export { saveInLocalStorage, readDataLocalStorage };
