const express = require('express');
const corretora = require("./controllers/corretora");
const app = express();
const porta = 4000;

app.use(express.json())

app.get('/corretora', (req, res) => {
    res.json(corretora.showAll())
})

app.post('/corretora', (req, res) => {
    const result = corretora.criar(req.body);
    res.status(result.status).json({ message: result.message})
})

app.put('/corretora/:id', (req, res) => {
    const id = parseInt(req.params.id); // Captura o ID da URL
    const result = corretora.atualizar({ id, ...req.body }); // Passa o ID e os novos dados
    res.status(result.status).json({ message: result.message})
});

app.delete('/corretora/:id', (req, res) => {
    const id = parseInt(req.params.id); // Captura o ID da URL
    const result = corretora.remover({id});
    res.status(result.status).json({ message: result.message})
});

app.listen(porta, () => {
    console.log(`Bora lá, porta ${porta}`);
})
