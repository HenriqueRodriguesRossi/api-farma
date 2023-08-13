const mongoose = require("mongoose")
const usuario = process.env.USER
const senha = process.env.PASS

function connect(){
    mongoose.connect(`mongodb+srv://${usuario}:${senha}@cluster0.3dw8h03.mongodb.net/?retryWrites=true&w=majority`)

    const connection = mongoose.connection

    connection.on("open", ()=>{
        console.log("Conectado ao banco de dados com sucesso!")
    })

    connection.on("error", (error)=>{
        console.log("Erro ao conectar com o banco!")
    })
}

connect()
module.exports = mongoose