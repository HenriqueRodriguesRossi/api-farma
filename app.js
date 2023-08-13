const express = require("express")
const app = express()
require("dotenv").config()
require("./db/conn")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const MedicamentoRouter = require("./router/MedicamentoRouter")
app.use(MedicamentoRouter)

app.listen(8080, ()=>{
    console.log("Servidor rodando com sucesso!")
})