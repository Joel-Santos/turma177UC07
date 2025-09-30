// Importando módulos nativos do Node.js:
// 'os' fornece informações sobre o sistema operacional
const os = require('os');
// 'path' permite manipular e trabalhar com caminhos de arquivos e diretórios
const path = require('path');
// 'fs' permite interagir com o sistema de arquivos (ler, escrever, listar arquivos, etc.)
const fs = require('fs');

// Exibindo informações do sistema operacional
console.log('=== INFORMAÇÕES DO SISTEMA ===');
console.log('Plataforma:', os.platform()); // Exibe o sistema operacional (ex: 'win32', 'linux')
console.log('Arquitetura:', os.arch()); // Exibe a arquitetura da CPU (ex: 'x64')
console.log('Memória total:', Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB'); // Memória RAM total em GB
console.log('Memória livre:', Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB'); // Memória RAM livre em GB

// Trabalhando com caminhos de arquivos e diretórios
console.log('\n=== INFORMAÇÕES DE CAMINHO ===');
console.log('Diretório atual:', __dirname); // Caminho absoluto do diretório atual do arquivo
console.log('Arquivo atual:', __filename); // Caminho absoluto do arquivo atual
console.log('Extensão do arquivo:', path.extname(__filename)); // Extensão do arquivo atual (ex: '.js')

// Listando arquivos do diretório atual usando o módulo 'fs'
// 'fs.readdir' lê o conteúdo de um diretório (neste caso, o diretório atual '.')
// O callback recebe dois parâmetros: 'err' para erros e 'files' que é um array com os nomes dos arquivos
console.log('\n=== ARQUIVOS NO DIRETÓRIO ===');
fs.readdir('.', (err, files) => {
    if (err) {
        // Se ocorrer um erro ao ler o diretório, exibe a mensagem de erro no console
        console.error('Erro ao ler diretório:', err);
        return; // Encerra a função em caso de erro
    }
    // Percorre o array de arquivos retornado e exibe cada nome de arquivo no console
    files.forEach(file => {
        // Exibe um ícone de pasta seguido do nome do arquivo/diretório encontrado
        console.log('📁', file);
    });
});