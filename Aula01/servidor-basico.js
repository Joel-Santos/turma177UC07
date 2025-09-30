// Importa o módulo HTTP nativo do Node.js, que permite criar servidores web
const http = require('http');

// Define a porta na qual o servidor irá escutar as requisições
const PORT = 3000;

// Cria o servidor HTTP
// A função de callback recebe dois parâmetros:
// - request: contém informações sobre a requisição recebida (URL, método, headers, etc.)
// - response: usado para enviar a resposta ao cliente
const servidor = http.createServer((request, response) => {
    // Define o cabeçalho da resposta HTTP:
    // - Status 200: sucesso
    // - Content-Type: tipo do conteúdo (HTML com charset UTF-8)
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Envia o conteúdo HTML como resposta ao cliente
    // Inclui informações dinâmicas: URL acessada, método HTTP e hora atual
    response.end(`
        <html>
        <head>
            <title>Meu Primeiro Servidor</title>
        </head>
        <body>
            <h1>🚀 Servidor Node.js Funcionando!</h1>
            <p>Este é meu primeiro servidor web.</p>
            <p>URL acessada: ${request.url}</p>
            <p>Método HTTP: ${request.method}</p>
            <p>Hora atual: ${new Date().toLocaleString()}</p>
        </body>
        </html>
    `);
});

// Inicia o servidor e faz com que ele escute na porta definida
// O callback é executado quando o servidor começa a rodar
servidor.listen(PORT, () => {
    console.log(`🌐 Servidor rodando em http://localhost:${PORT}`);
    console.log('Pressione Ctrl+C para parar o servidor');
});

// Trata o encerramento gracioso do servidor ao receber o sinal SIGINT (Ctrl+C)
// Fecha o servidor e exibe mensagens no console
process.on('SIGINT', () => {
    console.log('\n👋 Servidor sendo encerrado...');
    servidor.close(() => {
        console.log('✅ Servidor encerrado com sucesso!');
        process.exit(0); // Encerra o processo Node.js
    });
});