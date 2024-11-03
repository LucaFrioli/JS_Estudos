import app from './app';

const port = 3000;
app.listen(port, () => {
	console.log(`Servidor iniciado na porta ${port}`);
	console.log(`Acesse: http://localhost:${port}`);
});
