const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial")
})

app.post("/registar", async (req, res) => {
    console.log(req.body);
    
    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Utilizador resgistado com sucesso!"
        })
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Utilizador não resgistado com sucesso!"
        })
    });

    //res.send("Página de registo")
})

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080")
});
