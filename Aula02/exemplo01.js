// Exemplo de como capturar argumentos

const argumentos  = process.argv.slice(2);

console.log(argumentos[0]);
console.log(argumentos[1]);

const n1 = parseFloat(argumentos[0]);
const n2 = parseFloat(argumentos[1]);


