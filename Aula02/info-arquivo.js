// Exercício 2: Informações de Arquivo
// Crie um programa que:
// Receba o nome de um arquivo como parâmetro
// Exiba informações sobre o arquivo (tamanho, data de criação, etc.)
// Use o módulo fs e path

const fs = require('fs');
const path = require('path');

const argumentos = process.argv.slice(2)

const fileName = argumentos[0];
const filePath  = path.resolve(fileName);

//Obter informações do arquivo

fs.stat(filePath, (err, stats) =>{
    if (err) {
        console.error('Erro ao obter os dados do arquivo:', err);
        return;
    }
    console.log('=== Informações do Arquivo ===');
    console.log(`Caminho absoluto: ${filePath}`);
    console.log(`Tamanho: ${stats.size} bytes`);
    console.log(`Criado em: ${stats.birthtime}`);
    console.log(`Modificado em: ${stats.mtime}`);
    console.log(`É um arquivo? ${stats.isFile()}`);
});

