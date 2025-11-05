// Exercício 1: Calculadora Simples
// Crie um arquivo calculadora.js que:

// Receba dois números via argumentos da linha de comando
// Realize as 4 operações básicas (+, -, *, /)
// Exiba os resultados formatados

const argumentos  = process.argv.slice(2);
const n1 = parseFloat(argumentos[0]);
const n2 = parseFloat(argumentos[1]);

const soma = n1 + n2 ;
console.log(`A soma de ${n1} + ${n2} = ${soma}`);

const subtracao = n1 - n2;
console.log(`A subtração de ${n1} - ${n2} = ${subtracao}`);

const multiplicacao = n1 * n2;
console.log(`A multiplicação de ${n1} x ${n2} = ${multiplicacao}`);

if(n2!=0){
    const divisao = n1/n2;
    console.log(`A divisão de ${n1} ÷ ${n2} = ${divisao.toFixed(2)}`);
}else{
    console.log(`Não é possível dividir por 0 -  ${n1} ÷ ${n2}`);
    
}
