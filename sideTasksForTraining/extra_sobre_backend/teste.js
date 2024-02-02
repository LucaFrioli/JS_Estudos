const http = require('node:http');

const server = http.createServer((req, res) => {
    const url = req.url;

    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>okay</h1>');
            break;

        case '/teste':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('Eu sou a página teste funcionando');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Rotão não encontrada, error status 404');
            break;
    }


});

const port = 3000;
server.listen(port);
console.log(`estou rodando no link http://localhost:${port}`);
