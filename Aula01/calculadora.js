// calculadora.js

// Captura os argumentos da linha de comando
// Exemplo de execução: node calculadora.js 10 5
const args = process.argv.slice(2);

// Verifica se foram passados dois números
if (args.length < 2) {
  console.log("Por favor, informe dois números. Exemplo: node calculadora.js 10 5");
  process.exit(1);
}

// Converte para número
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Verifica se os valores são válidos
if (isNaN(num1) || isNaN(num2)) {
  console.log("Os argumentos precisam ser números válidos.");
  process.exit(1);
}

// Operações básicas
const soma = num1 + num2;
const subtracao = num1 - num2;
const multiplicacao = num1 * num2;
const divisao = num2 !== 0 ? num1 / num2 : "Divisão por zero não é permitida.";

// Exibe resultados formatados
console.log(`=== Calculadora Simples ===`);
console.log(`${num1} + ${num2} = ${soma}`);
console.log(`${num1} - ${num2} = ${subtracao}`);
console.log(`${num1} * ${num2} = ${multiplicacao}`);
console.log(`${num1} / ${num2} = ${divisao}`);
