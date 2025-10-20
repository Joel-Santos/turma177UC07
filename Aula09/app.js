import express from "express";
import 'dotenv/config';
import autorRoutes from "./src/routes/autorRoutes.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/autores", autorRoutes);

app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})