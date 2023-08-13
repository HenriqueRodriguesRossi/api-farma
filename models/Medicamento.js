const mongoose = require("mongoose")

const RemedioModel = new mongoose.Schema({
    nomeMedicamento:{
        type: String,
        require: true
    },
    laboratorio:{
        type: String,
        require: true
    },
    valorDoMedicamento:{
        type: Number,
        require: true
    },
    quantidadeDisponivel:{
        type: Number,
        require: true
    }
}, {versionKey: false})

module.exports = mongoose.model("Remedio", RemedioModel)