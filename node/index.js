const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Meu container Node</h2>')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})


