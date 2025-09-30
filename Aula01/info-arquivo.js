// infoArquivo.js

const fs = require("fs");
const path = require("path");

// Captura o nome do arquivo via argumento
// Exemplo: node infoArquivo.js calculadora.js
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log("Por favor, informe o nome de um arquivo. Exemplo: node infoArquivo.js calculadora.js");
  process.exit(1);
}

const fileName = args[0];
const filePath = path.resolve(fileName);

// Verifica se o arquivo existe
if (!fs.existsSync(filePath)) {
  console.log(`O arquivo "${fileName}" não foi encontrado.`);
  process.exit(1);
}

// Obtém informações do arquivo
fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error("Erro ao obter informações do arquivo:", err.message);
    return;
  }

  console.log(`=== Informações do Arquivo ===`);
  console.log(`Caminho absoluto: ${filePath}`);
  console.log(`Tamanho: ${stats.size} bytes`);
  console.log(`Criado em: ${stats.birthtime}`);
  console.log(`Modificado pela última vez em: ${stats.mtime}`);
  console.log(`É diretório? ${stats.isDirectory()}`);
  console.log(`É arquivo? ${stats.isFile()}`);
});
