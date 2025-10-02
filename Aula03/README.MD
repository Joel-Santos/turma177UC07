# Aula: Node.js com `type: module`, Funções e Imports

## Objetivos

* Entender como configurar um projeto Node.js usando **ES Modules** (`type: module`)
* Aprender a criar funções em arquivos separados e usar **default exports** e **named exports**
* Praticar a importação de módulos e execução de código

---

## 1️⃣ Configurando o Projeto

### Passo 1 – Criar a pasta do projeto

```bash
mkdir exercicio-esm
cd exercicio-esm
npm init -y
```

### Passo 2 – Ativar ESM

No `package.json`, adicione ou edite:

```json
{
  "name": "exercicio-esm",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js"
}
```

---

## 2️⃣ Estrutura de Pastas e Arquivos

```
exercicio-esm/
│── index.js
│── math/
│    ├── soma.js
│    ├── subtracao.js
│    └── utils.js
```

---

## 3️⃣ Criando Funções

### math/soma.js

```js
export default function soma(a, b) {
  return a + b;
}
```

### math/subtracao.js

```js
export function subtracao(a, b) {
  return a - b;
}
```

### math/utils.js

```js
export function multiplicacao(a, b) {
  return a * b;
}

export function divisao(a, b) {
  if (b === 0) throw new Error("Não é possível dividir por zero!");
  return a / b;
}
```

---

## 4️⃣ Importando Funções no index.js

```js
// Importa com "default export"
import soma from "./math/soma.js";

// Importa com "named exports"
import { subtracao } from "./math/subtracao.js";
import { multiplicacao, divisao } from "./math/utils.js";

// Testando funções
console.log("Soma:", soma(10, 5));          // 15
console.log("Subtração:", subtracao(10, 5)); // 5
console.log("Multiplicação:", multiplicacao(10, 5)); // 50
console.log("Divisão:", divisao(10, 5));    // 2
```

---

## 5️⃣ Executando o Projeto

```bash
node index.js
```

Saída esperada:

```
Soma: 15
Subtração: 5
Multiplicação: 50
Divisão: 2
```

---

## 6️⃣ Desafio Extra

1. Crie uma função `potencia(base, expoente)` dentro de `utils.js`
2. Importe no `index.js` e teste com valores diferentes

---

## ⚡ Dicas e Boas Práticas

* Sempre coloque a **extensão **``** nos imports locais**
* Prefira **default export** para funções únicas em um arquivo
* Use **named exports** quando o arquivo tiver múltiplas funções/utilitários
* Organize funções em pastas para manter o projeto limpo
