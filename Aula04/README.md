# Aula 04 — Introdução ao Express.js: Criando Rotas e Tipos de Resposta

## Objetivos da Aula

- Compreender o conceito do Express.js e como ele facilita o desenvolvimento de APIs.
- Criar rotas básicas para responder a diferentes métodos HTTP.
- Explorar e testar os principais tipos de resposta do objeto `res`.
- Testar rotas usando o Insomnia.

---

## Conteúdo Teórico

### O que é Express.js?

Express.js é um framework web para Node.js que simplifica a criação de servidores HTTP e APIs REST. Ele oferece uma abordagem minimalista e flexível, tornando o desenvolvimento rápido e prático.

---

### Principais Métodos de Resposta

- **res.send()**: Responde com qualquer tipo de dado (string, objeto, array, etc.).
- **res.json()**: Responde sempre com JSON, ajustando o cabeçalho corretamente.
- **res.status()**: Define o status HTTP da resposta.
- **res.sendStatus()**: Define e envia o texto correspondente ao status HTTP.
- **res.redirect()**: Redireciona para uma nova rota/URL.
- **res.download()**: Força o download de um arquivo.
- **res.sendFile()**: Envia um arquivo como resposta.
- **res.end()**: Encerra a resposta sem corpo adicional.

---

## Exemplos Práticos

```

import express from 'express'
const app = express()
const PORT = 3000

// Rota com send (texto simples)
app.get('/texto', (req, res) => {
res.send('Resposta em texto simples')
})

// Rota com json
app.get('/json', (req, res) => {
res.json({ mensagem: 'Resposta em JSON', tempo: Date.now() })
})

// Rota com status + json
app.post('/criar', (req, res) => {
res.status(201).json({ sucesso: true, mensagem: 'Recurso criado!' })
})

// Rota com erro
app.get('/erro', (req, res) => {
res.status(400).json({ erro: 'Requisição inválida' })
})

// Rota de redirecionamento
app.get('/redirect', (req, res) => {
res.redirect('/json')
})

// Rota de status sem conteúdo
app.get('/no-content', (req, res) => {
res.sendStatus(204)
})

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`)
})

```

---

## Testando Tudo no Insomnia

1. GET `/texto` → texto simples.
2. GET `/json` → objeto JSON.
3. POST `/criar` → status 201 + mensagem JSON.
4. GET `/erro` → status 400 + mensagem de erro JSON.
5. GET `/redirect` → redirecionamento para `/json`.
6. GET `/no-content` → status 204 (sem corpo).

---

## Exercício Prático

- Crie uma rota `/produtos` que retorna um array JSON de produtos.
- Crie uma rota `/download` que retorna um arquivo local de exemplo (use `res.download()`).
- Teste cada rota usando Insomnia e observe os headers e tipos de resposta.

---

## Material Complementar

- [Guia de Rotas Express.js (oficial)](https://expressjs.com/pt-br/guide/routing.html)
- [Insomnia Docs: Como testar APIs REST](https://docs.insomnia.rest)
- [Qual a diferença de res.send e res.json?](https://horadecodar.com.br/qual-a-diferenca-de-res-send-e-res-json-em-express/) 
- [Express/Node Introdução](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)



