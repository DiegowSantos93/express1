const naipe_controller = require("./controllers/naipe.js")
const express = require("express")
const app = express()
const port = 9000

app.use(express.json())

app.get("/naipe", (req, res) => {
    const content = naipe_controller.index()
    res.json(content)
})

app.get("/naipe/:id", (req, res) => {
    const content = naipe_controller.show(req.params.id)
    res.json(content)
})

app.post("/naipe", (req, res) => {
    const code = naipe_controller.store(req.body)
    res.status(code).json()
})

app.put("/naipe/:id", (req, res) => {
    const code = naipe_controller.update(req.params.id, req.body)
    res.status(code).json()
})

app.delete("/naipe/:id", (req, res) => {
    const code = naipe_controller.destroy(req.params.id)
    res.status(code).json()
})

app.listen(port, () => {
    console.log('Iniciando a aplicação')
})
