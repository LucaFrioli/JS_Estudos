const { readFile } = require('node:fs/promises');
const { resolve } = require('node:path');
const productsJsonFile = resolve(__dirname, 'productsDataBase.json');

const getAll = async () => {
	try {
		const productsJsonArray = await readFile(productsJsonFile);
		const arrayProducts = await JSON.parse(productsJsonArray);
		return arrayProducts;
	} catch (e) {
		console.log('erro ao tentar acessar as informações do json');
	}
};

const getById = async (id) => {
	const arrayProducts = await getAll();
	const product = arrayProducts
		.filter((obj) => (obj.id === id ? obj : false))
		.pop();
	return product;
};

const getByCategory = async (categoryArraySerch = []) => {
	if (!Array.isArray && categoryArraySerch.length === 0) {
		const err = new Error('Falha na busca');
		return err;
	}
	const arrayProducts = await getAll();
	const filteredArray = arrayProducts.filter((obj) =>
		categoryArraySerch.includes(obj.category)
	);
	return filteredArray;
};

module.exports = { getAll, getById, getByCategory };
