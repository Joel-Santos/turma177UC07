// Exemplo de operações síncronas e assíncronas em Node.js

// 1. Início do programa (síncrono)
console.log('1. Início do programa');

// 2. Operação síncrona (executa imediatamente)
console.log('2. Operação síncrona');

// 3. Operação assíncrona com prioridade máxima (executa antes de outros callbacks assíncronos)
// process.nextTick() agenda a função para ser executada logo após o término do loop atual de eventos
process.nextTick(() => {
    console.log('3. Operação assíncrona - nextTick (prioridade alta)');
});

// 4. Operação assíncrona usando setTimeout (executa após pelo menos 2 segundos)
// setTimeout agenda a execução da função após o tempo especificado (2000 ms)
setTimeout(() => {
    console.log('4. Operação assíncrona - setTimeout (2 segundos)');
}, 2000);

// 5. Operação assíncrona usando setImmediate (executa após o término do ciclo atual do event loop)
// setImmediate agenda a função para ser executada na próxima iteração do event loop
setImmediate(() => {
    console.log('5. Operação assíncrona - setImmediate');
});

// 6. Fim do programa (síncrono)
console.log('6. Fim do programa (síncrono)');

// 7. Importando o módulo 'fs' (File System) do Node.js para manipulação de arquivos
const fs = require('fs');

// 8. Criando um arquivo de teste de forma síncrona
// fs.writeFileSync escreve o arquivo de forma bloqueante, ou seja, o código só continua após a escrita
fs.writeFileSync('teste.txt', 'Este é um arquivo de teste para demonstrar operações assíncronas');

// 9. Leitura assíncrona do arquivo criado
// fs.readFile lê o arquivo de forma não bloqueante, e executa o callback quando terminar
fs.readFile('teste.txt', 'utf8', (err, data) => {
    if (err) {
        // Caso ocorra erro na leitura, exibe mensagem de erro
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    // Exibe o conteúdo do arquivo após a leitura assíncrona
    console.log('7. Conteúdo do arquivo:', data);
});

// 10. Esta linha executa antes da leitura assíncrona do arquivo
console.log('8. Esta linha executa antes da leitura do arquivo!');