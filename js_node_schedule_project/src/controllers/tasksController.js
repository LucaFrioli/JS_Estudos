const data = { title: 'tasks' };

exports.index = (req, res) => {
	const dataInjection = { ...data, ...req.body };
	res.render('tasks', dataInjection);
};
