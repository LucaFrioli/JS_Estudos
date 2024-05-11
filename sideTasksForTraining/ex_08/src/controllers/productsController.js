const { resolve } = require('node:path');

const { getAll, getById, getByCategory } = require(
	resolve(__dirname, '..', 'models', 'productsModel.js')
);

const cache = {};

exports.productsInit = async (req, res) => {
	try {
		const arrayProducts = await getAll();
		const categoryMapped = arrayProducts.map((value) => value.category);
		cache.categories = [...new Set(categoryMapped)];
		res.render('products', {
			title: 'Loja',
			categoryArray: cache.categories,
			arrayProducts
		});
	} catch (e) {
		res.redirect('/404Error');
	}
};

exports.getProductById = async (req, res) => {
	try {
		// valida qual tipo de id deve ser procurado, string ou numero e permite a boa execução
		const id = isNaN(Number(req.params.id))
			? req.params.id
			: Number(req.params.id);

		const product = await getById(id);
		res.render('productSpecify', { title: product.name, product });
	} catch (e) {
		res.redirect('/404Error');
	}
};

exports.getByProductCategory = async (req, res) => {
	try {
		const { category } = req.query;
		const arrayProducts = await getByCategory(category);
		res.render('products', {
			title: 'Loja ',
			categoryArray: cache.categories,
			arrayProducts
		});
	} catch (e) {
		res.render('/404Error');
	}
};
