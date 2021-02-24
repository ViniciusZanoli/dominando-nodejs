const express = require("express");
const app = express();


// Query -> Paramtros opcionais
app.get("/hello", (req, res) => {
    const { nome, idade } = req.query;
    
    return res.json({
        "title":"Hello World",        
        "message":`Olá ${nome} você tem ${idade} anos correto ?`
    })
});

// Params -> Paramtros obrigatórios
app.get("/hello/:nome", (req, res) => {
    const nome = req.params.nome;    
    const idade = req.query.idade;
    
    return res.json({
        "title":"Hello World",
        "nome":`${nome}`,
        "idade":`${idade}`,
        "message":`Olá ${nome} parabéns pelos ${idade} anos !`
    })
});

app.listen(3000, () => {
    console.log("Servidor no ar")
});