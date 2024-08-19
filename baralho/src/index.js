const express = require("express")
const app = express()
const port = 3000

app.get("/naipe", (req, res) => {
    res.send("get naipe")
})

app.listen(port, () => {
    console.log('Iniciando a aplicação')
})
