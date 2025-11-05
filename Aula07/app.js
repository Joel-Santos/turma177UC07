import express from 'express';
import livroRoutes from './src/routes/livroRoutes.js';
const app = express();
const port = 3000;

app.use(express.json()); //Configuração do mediador

app.use('/livros', livroRoutes); //Utilizando o routes de livro

app.get('/', (req, res) =>{
    res.status(200).send("Rota home");
});

app.listen(port, () =>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
});


