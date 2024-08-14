const express = require('express');
const app = express();
const porta = 3000;
const op = require("./controllers/operacoes")

app.use(express.json())

app.get('/calculadora/soma',(req, res) => {
  const result = op.soma(req.body)
  res.send(`A soma é: ${result}`)
});

app.get('/calculadora/subtracao',(req, res) => {
  const result = op.subtracao(req.body)
  res.send(`A subtração é: ${result}`)
});

app.get('/calculadora/divisao',(req, res) => {
  const result = op.divisao(req.body)
  res.send(`A divisão é: ${result}`)
});

app.get('/calculadora/multiplicacao',(req, res) => {
  const result = op.multiplicacao(req.body)
  res.send(`A multiplicação é: ${result}`)
});

app.listen(porta, () => {
    console.log(`Bora lá, porta ${porta}`);
  })
