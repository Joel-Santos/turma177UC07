import express from "express";
import "dotenv/config";

import alunoRoutes from "./src/routes/aluno/alunoRoutes.js";
import cursoRoutes from "./src/routes/curso/cursoRoutes.js";
import disciplinaRoutes from "./src/routes/disciplina/disciplinaRoutes.js";
import cursoDisciplinaRoutes from "./src/routes/disciplinaCurso/disciplinaCursoRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Rotas
app.use("/alunos", alunoRoutes);
app.use("/cursos", cursoRoutes);
app.use("/disciplinas", disciplinaRoutes);
app.use("/curso-disciplinas", cursoDisciplinaRoutes);

// Servidor
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
