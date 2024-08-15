const express = require('express');
const corretora = require("./controllers/corretora");
const app = express();
const porta = 4000;

app.use(express.json())

app.get('/corretora', (req, res) => {
    res.json(corretora.showAll())
})

app.post('/corretora', (req, res) => {

const result = corretora.store(req.body);
res.result(result.status).json({ message: result.message})
})


app.listen(porta, () => {
    console.log(`Bora lá, porta ${porta}`);
})
