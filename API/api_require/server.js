const http = require('http');
const port = 3000;

const rotas = {
    '/': 'curso de node',
    '/livros':'lista de livros',
    '/autores': 'informações dos autores',
    '/sobre': 'informações sobre a empresa'
}

const server = http.createServer((require,resposta)=>{
    resposta.writeHead(200,{"Content-Type":"text/plain"});
    resposta.end(rotas[require.url]);
});

server.listen(port,()=>{
    console.log(`o servidor está escutando em http://localhost:${port}`);
});