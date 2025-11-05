import express from 'express';
import 'dotenv/config';
const app = express();
const port = process.env.PORT;

app.use(express.json()); //Configuração do mediador

app.get('/', (req, res) =>{
    res.status(200).send(process.env.SAUDACAO);
});

app.listen(port, () =>{
    console.log(`Aplicação rodando em http://localhost:${port}`);
});


