import express from "express";
import 'dotenv/config';
import autorRoutes from "./src/routes/autorRoutes.js";
import categoriaRoutes from "./src/routes/categoriaRoutes.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/autores", autorRoutes);
app.use("/categorias", categoriaRoutes);

app.listen(port, ()=>{
    console.log(`Servidor rodando em: http://localhost:${port}`);
})