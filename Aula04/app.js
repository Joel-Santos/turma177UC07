import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);
const app = express();
const port = 3000;


//Rota com send (texto simples)
app.get('/texto', (req,res) => {
    res.send("Resposta em texto simples");
});

//Rota com json
app.get('/json', (req, res) =>{
    res.json({mensagem: 'Resposta em JSON', tempo:  Date.now()})
});

//Rota com status  + json
app.post('/criar', (req,res)=>{
    res.status(201).json({sucesso: true, mensagem: 'Recurso Criado!'});
})
// Rota com erro
app.get('/erro', (req,res)=>{
    res.status(400).json({erro: 'Requisição inválida'});
})

//Rota de redirecionamento
app.get('/redirect', (req, res)=>{
    res.redirect('/json');
})

//Rota sem conteúdo
app.get('/no-content', (req, res)=>{
    res.sendStatus(204);
})

app.get('/download', (req, res)=>{
    const caminho = path.join(__dirname, "teste.txt");
    res.download(caminho, "arquivo-exemplo.txt", (err) =>{
        if(err){
            console.error("Erro ao enviar o arquivo:", err);
            res.status(500).send("Erro ao fazer o download!");
        }
    } )
} )

// Crie uma rota /produtos que retorna um array JSON de produtos.
// Crie uma rota /download que retorna um arquivo local de exemplo (use res.download()).



app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});