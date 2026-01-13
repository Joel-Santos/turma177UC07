import express from "express";
import "dotenv/config";
import alunoRoutes from "./src/routes/alunoRoutes.js";

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/alunos", alunoRoutes);

app.listen(port, ()=>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
})