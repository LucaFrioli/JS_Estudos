export default class Home {
	index(req, res) {
		res.json({
			say: 'Hello world!',
		});
	}
}
