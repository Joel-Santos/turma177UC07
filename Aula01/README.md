# Aula 1: Introdução ao Desenvolvimento Back-end e Node.js

## Objetivos da Aula
- Compreender o que é desenvolvimento back-end e sua importância
- Entender o que é Node.js e como funciona
- Aprender os conceitos básicos do Event Loop
- Instalar e configurar o ambiente de desenvolvimento
- Criar o primeiro programa em Node.js

## Conteúdo Teórico

### O que é Desenvolvimento Back-end?

O desenvolvimento back-end refere-se à parte "invisível" de uma aplicação web - tudo que acontece no servidor. Enquanto o front-end é responsável pela interface que o usuário vê e interage, o back-end cuida de:

- **Lógica de negócio**: Processamento de dados, regras de negócio
- **Banco de dados**: Armazenamento e recuperação de informações
- **Autenticação**: Verificação de identidade dos usuários
- **APIs**: Pontos de comunicação entre diferentes sistemas
- **Segurança**: Proteção de dados e validação de requests

**Exemplo prático:** Quando você faz login no Facebook:
- **Front-end**: Formulário que você preenche
- **Back-end**: Verificação das credenciais, consulta ao banco de dados, geração de token de acesso

### O que é Node.js?

Node.js é um **runtime de JavaScript** que permite executar código JavaScript fora do navegador, diretamente no servidor. Foi criado por Ryan Dahl em 2009 utilizando o motor V8 do Google Chrome.

**Características principais:**
- **Multiplataforma**: Roda em Windows, Mac, Linux
- **Event-driven**: Baseado em eventos
- **Non-blocking I/O**: Operações não bloqueantes
- **Single-threaded**: Uma única thread principal (com event loop)

### Event Loop - O Coração do Node.js

O Event Loop é o mecanismo que permite ao Node.js ser não-bloqueante. Ele funciona como um loop infinito que verifica continuamente se há eventos ou callbacks prontos para serem executados.

**Como funciona:**
1. **Call Stack**: Onde as funções são executadas
2. **Task Queue**: Fila de tarefas assíncronas
3. **Event Loop**: Move tarefas da queue para o stack quando este está vazio

### Por que usar JavaScript no Back-end?

**Vantagens:**
- **Uma linguagem**: Same language no front e back-end
- **NPM**: Maior repositório de bibliotecas do mundo
- **Performance**: V8 engine é muito rápida
- **Comunidade**: Muito ativa e suporte extenso
- **JSON nativo**: Trabalha naturalmente com JSON

## Exemplos Práticos

### Exemplo 1: Instalação do Node.js

**Passo 1:** Baixar do site oficial
```bash
# Verificar se instalou corretamente
node --version
npm --version
```

**Passo 2:** Configurar ambiente de desenvolvimento
```bash
# Criar pasta do projeto
mkdir meu-primeiro-node
cd meu-primeiro-node

# Inicializar projeto Node.js
npm init -y
```

### Exemplo 2: Primeiro Programa - Hello World

**Arquivo: hello.js**
```javascript
// Meu primeiro programa em Node.js
console.log('Hello World!');
console.log('Bem-vindo ao desenvolvimento back-end!');

// Mostrando informações do processo
console.log('Versão do Node.js:', process.version);
console.log('Plataforma:', process.platform);
```

**Executar:**
```bash
node hello.js
```

### Exemplo 3: Trabalhando com Módulos Nativos

**Arquivo: info-sistema.js**
```javascript
// Importando módulos nativos do Node.js
const os = require('os');
const path = require('path');
const fs = require('fs');

// Informações do sistema operacional
console.log('=== INFORMAÇÕES DO SISTEMA ===');
console.log('Plataforma:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Memória total:', Math.round(os.totalmem() / 1024 / 1024 / 1024) + ' GB');
console.log('Memória livre:', Math.round(os.freemem() / 1024 / 1024 / 1024) + ' GB');

// Trabalhando com caminhos
console.log('\\n=== INFORMAÇÕES DE CAMINHO ===');
console.log('Diretório atual:', __dirname);
console.log('Arquivo atual:', __filename);
console.log('Extensão do arquivo:', path.extname(__filename));

// Listando arquivos do diretório atual
console.log('\\n=== ARQUIVOS NO DIRETÓRIO ===');
fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Erro ao ler diretório:', err);
        return;
    }
    
    files.forEach(file => {
        console.log('📁', file);
    });
});
```

### Exemplo 4: Servidor HTTP Básico

**Arquivo: servidor-basico.js**
```javascript
// Importando o módulo HTTP nativo do Node.js
const http = require('http');

// Definindo a porta do servidor
const PORT = 3000;

// Criando o servidor
const servidor = http.createServer((request, response) => {
    // Definindo o cabeçalho da resposta
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    // Enviando conteúdo HTML
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

// Iniciando o servidor
servidor.listen(PORT, () => {
    console.log(`🌐 Servidor rodando em http://localhost:${PORT}`);
    console.log('Pressione Ctrl+C para parar o servidor');
});

// Tratamento de encerramento gracioso
process.on('SIGINT', () => {
    console.log('\\n👋 Servidor sendo encerrado...');
    servidor.close(() => {
        console.log('✅ Servidor encerrado com sucesso!');
        process.exit(0);
    });
});
```

### Exemplo 5: Demonstrando Assincronismo

**Arquivo: assincrono-exemplo.js**
```javascript
console.log('1. Início do programa');

// Operação síncrona
console.log('2. Operação síncrona');

// Operação assíncrona - setTimeout
setTimeout(() => {
    console.log('4. Operação assíncrona - setTimeout (2 segundos)');
}, 2000);

// Operação assíncrona - setImmediate
setImmediate(() => {
    console.log('5. Operação assíncrona - setImmediate');
});

// Operação assíncrona - process.nextTick
process.nextTick(() => {
    console.log('3. Operação assíncrona - nextTick (prioridade alta)');
});

console.log('6. Fim do programa (síncrono)');

// Demonstrando leitura de arquivo assíncrona
const fs = require('fs');

// Criando um arquivo para teste
fs.writeFileSync('teste.txt', 'Este é um arquivo de teste para demonstrar operações assíncronas.');

// Leitura assíncrona
fs.readFile('teste.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    console.log('7. Conteúdo do arquivo:', data);
});

console.log('8. Esta linha executa antes da leitura do arquivo!');
```

## Exercícios Práticos

### Exercício 1: Calculadora Simples
Crie um arquivo `calculadora.js` que:
- Receba dois números via argumentos da linha de comando
- Realize as 4 operações básicas (+, -, *, /)
- Exiba os resultados formatados

**Dica:** Use `process.argv` para capturar argumentos

### Exercício 2: Informações de Arquivo
Crie um programa que:
- Receba o nome de um arquivo como parâmetro
- Exiba informações sobre o arquivo (tamanho, data de criação, etc.)
- Use o módulo `fs` e `path`

### Exercício 3: Servidor de Horário
Modifique o servidor HTTP para:
- Responder com horário atual em JSON
- Incluir diferentes formatos de data
- Adicionar rota `/time` que retorna apenas o horário

## Material Complementar

### Documentação Oficial
- [Node.js Official Docs](https://nodejs.org/docs/)
- [NPM Documentation](https://docs.npmjs.com/)

### Artigos Recomendados
- "O que é Node.js e por que usar" - Mozilla Developer Network
- "Understanding the Event Loop" - Node.js Guides

### Vídeos Complementares
- "Node.js Explained" - Traversy Media
- "Event Loop in Node.js" - Academind

### Ferramentas Úteis
- **VS Code**: Editor recomendado para Node.js
- **Nodemon**: Auto-restart durante desenvolvimento
- **Postman**: Testar APIs (próximas aulas)

## Preparação para Próxima Aula

Na próxima aula, vamos aprofundar nos **Módulos e NPM**. Para se preparar:

1. **Instale o Nodemon globalmente:**
   ```bash
   npm install -g nodemon
   ```

2. **Explore a pasta node_modules** que será criada quando instalar pacotes

3. **Leia sobre CommonJS** - sistema de módulos do Node.js

4. **Pratique os exemplos** desta aula até se sentir confortável

## Comandos Importantes desta Aula

```bash
# Verificar versões
node --version
npm --version

# Inicializar projeto Node.js
npm init -y

# Executar arquivo JavaScript
node arquivo.js

# Instalar pacote globalmente
npm install -g nome-do-pacote

# Parar servidor (no terminal)
Ctrl + C
```

---

**💡 Dica importante:** Node.js pode parecer intimidador no início, mas com prática regular você dominará rapidamente. O segredo é experimentar muito e não ter medo de errar!