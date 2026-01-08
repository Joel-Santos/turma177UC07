Perfeito 👍
Abaixo está o **ARQUIVO `.md` DA AULA**, **pronto para uso no SENAC** (apostila, GitHub ou AVA).
É um material **autossuficiente**, organizado, didático e alinhado com o que construímos.

---

# Aula – API com Express + Prisma + MVC (Padrão SENAC)

## 🎯 Objetivo da Aula

Ao final desta aula, o aluno será capaz de:

* Criar uma API Node.js com Express
* Conectar a aplicação a um banco PostgreSQL usando Prisma ORM
* Organizar o projeto utilizando o padrão MVC
* Entender a separação entre Controller, Model e Infraestrutura
* Implementar rotas de listagem, busca e criação de dados

---

## 🧠 Conceitos Trabalhados

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* MVC (Model–View–Controller)
* Infraestrutura de acesso a dados
* Controllers com classe e métodos `static`

---

## 🧱 Arquitetura Utilizada

```text
Routes → Controller → Model → Infra → Banco
```

### Responsabilidade de cada camada

* **Routes**: define as URLs e métodos HTTP
* **Controller**: trata requisição e resposta
* **Model**: regras e acesso aos dados
* **Infra**: conexão com tecnologias externas (Prisma/Banco)
* **Banco**: persistência dos dados

> Regra de ouro:
> **Controller não acessa banco**
> **Model não conhece HTTP**
> **Infra não contém regras de negócio**

---

## 📁 Estrutura do Projeto

```bash
express-prisma-mvc/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   │   └── UsuarioController.js
│   │
│   ├── models/
│   │   └── UsuarioModel.js
│   │
│   ├── infra/
│   │   └── database/
│   │       └── prisma.js
│   │
│   ├── routes/
│   │   └── usuario.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
└── package.json
```

---

## 🔧 Passo 1 – Criação do Projeto

```bash
npm init -y
npm install express prisma @prisma/client
npm install -D nodemon
```

---

## 🔧 Passo 2 – Inicializar o Prisma

```bash
npx prisma init
```

Arquivos criados:

* `prisma/schema.prisma`
* `.env`

---

## 🔧 Passo 3 – Configuração do Banco de Dados

📄 `.env`

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/meu_banco"
```

---

## 🧱 Passo 4 – Schema do Prisma

📄 `prisma/schema.prisma`

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Usuario {
  id    Int    @id @default(autoincrement())
  nome  String
  email String @unique
}
```

Criar as tabelas no banco:

```bash
npx prisma migrate dev --name criar_usuario
```

---

## 🧩 Passo 5 – Infraestrutura de Banco

📄 `src/infra/database/prisma.js`

```js
import { PrismaClient } from '@prisma/client'

// Instância única do Prisma Client
const prisma = new PrismaClient()

export default prisma
```

📌 Este arquivo:

* Não é middleware
* Não é controller
* É infraestrutura de acesso ao banco

---

## 🧩 Passo 6 – Model

📄 `src/models/UsuarioModel.js`

```js
import prisma from '../infra/database/prisma.js'

export default class UsuarioModel {

    static async listar() {
        return prisma.usuario.findMany()
    }

    static async buscarPorId(id) {
        return prisma.usuario.findUnique({
            where: { id: Number(id) }
        })
    }

    static async criar(dados) {
        return prisma.usuario.create({
            data: dados
        })
    }
}
```

📌 O Model:

* Não recebe `req` ou `res`
* Apenas manipula dados

---

## 🧠 Passo 7 – Controller

📄 `src/controllers/UsuarioController.js`

```js
import UsuarioModel from '../models/UsuarioModel.js'

export default class UsuarioController {

    static async listar(req, res) {
        try {
            const usuarios = await UsuarioModel.listar()

            if (!usuarios || usuarios.length === 0) {
                return res.status(404).json({ msg: 'Nenhum usuário cadastrado' })
            }

            return res.status(200).json(usuarios)

        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao listar usuários',
                erro: error.message
            })
        }
    }

    static async buscarPorId(req, res) {
        const { id } = req.params

        try {
            const usuario = await UsuarioModel.buscarPorId(id)

            if (!usuario) {
                return res.status(404).json({ msg: 'Usuário não encontrado' })
            }

            return res.status(200).json(usuario)

        } catch (error) {
            return res
                .status(500)
                .json({ msg: 'Erro ao buscar usuário', erro: error.message })
        }
    }

    static async criar(req, res) {
        const { nome, email } = req.body

        try {
            const usuario = await UsuarioModel.criar({ nome, email })
            return res.status(201).json(usuario)

        } catch (error) {
            return res
                .status(400)
                .json({ msg: 'Erro ao criar usuário', erro: error.message })
        }
    }
}
```

---

## 🛣 Passo 8 – Rotas

📄 `src/routes/usuario.routes.js`

```js
import { Router } from 'express'
import UsuarioController from '../controllers/UsuarioController.js'

const router = Router()

router.get('/usuarios', UsuarioController.listar)
router.get('/usuarios/:id', UsuarioController.buscarPorId)
router.post('/usuarios', UsuarioController.criar)

export default router
```

---

## 🚀 Passo 9 – App e Server

📄 `src/app.js`

```js
import express from 'express'
import usuarioRoutes from './routes/usuario.routes.js'

const app = express()

app.use(express.json())
app.use(usuarioRoutes)

export default app
```

📄 `src/server.js`

```js
import app from './app.js'

app.listen(3000, () => {
    console.log('🚀 API rodando na porta 3000')
})
```

---

## 🧪 Testes de Requisição

### Criar usuário

```http
POST /usuarios
Content-Type: application/json

{
  "nome": "Carlos",
  "email": "carlos@email.com"
}
```

### Listar usuários

```http
GET /usuarios
```

---

## 🧠 Conclusão da Aula

Nesta aula aprendemos:

* Como estruturar uma API profissional
* Como separar responsabilidades usando MVC
* Como usar Prisma ORM com PostgreSQL
* Como organizar a infraestrutura do projeto

---

## 📝 Atividade Prática (Sugestão)

1. Criar métodos `update` e `delete`
2. Criar rota para buscar usuário por e-mail
3. Criar um novo model (Ex: Curso)
4. Relacionar Usuário com Curso

---

📌 **Mensagem final para o aluno:**

> “Código organizado é código que cresce sem quebrar.”



