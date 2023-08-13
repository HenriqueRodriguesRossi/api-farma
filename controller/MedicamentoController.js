const MedicamentoModel = require("../models/Medicamento")

module.exports = class RemedioController {
    static async cadastraMed(req, res) {
        const { nomeMedicamento, laboratorio, valorDoMedicamento, quantidadeDisponivel } = req.body

        if (!nomeMedicamento || !laboratorio || !valorDoMedicamento || !quantidadeDisponivel) {
            return res.status(400).send({
                mensagem: "Todos os campos devem ser preenchidos corretamente!"
            })
        }

        if (nomeMedicamento.length <= 1 || nomeMedicamento.length > 200) {
            return res.status(422).send({
                mensagem: "Nome do medicamento inválido!"
            })
        }

        const verificaMed = await MedicamentoModel.findOne({ nomeMedicamento })

        if (verificaMed) {
            return res.status(422).send({
                mensagem: "Medicamento já cadastrado!"
            })
        }

        try {
            const novoMedicamento = new MedicamentoModel({
                nomeMedicamento,
                laboratorio,
                valorDoMedicamento,
                quantidadeDisponivel
            })

            await novoMedicamento.save()

            return res.status(201).send({
                mensagem: "Medicamento cadastrado com sucesso!"
            })
        } catch (error) {
            console.error(error)
            return res.status(500).send({
                mensagem: "Erro ao cadastrar medicamento!"
            })
        }
    }

    static async buscaMed(req, res) {
        const { nomeMedicamento } = req.body

        if (!nomeMedicamento) {
            return res.status(400).send({
                mensagem: "Nome do medicamento é obrigatório!"
            })
        }

        try {
            const verificaNome = await MedicamentoModel.findOne({ nomeMedicamento })
            
            if (!verificaNome) {
                return res.status(422).send({
                    mensagem: "Nenhum medicamento foi encontrado!"
                })
            }

            return res.status(200).send({
                sucesso: verificaNome
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                mensagem: "Erro ao retornar o medicamento!"
            })
        }
    }

    static async alterarMed(req, res) {
        const { nomeMedicamento, novoNomeMed, quantidadeDisponivel, novaQuantidade } = req.body

        if (!nomeMedicamento || !novoNomeMed || quantidadeDisponivel <= 0 || novaQuantidade <= 0) {
            return res.status(400).send({
                mensagem: "Todos os campos devem ser preenchidos corretamente!"
            })
        }

        try {
            const medicamentoExiste = await MedicamentoModel.findOne({ nomeMedicamento })

            if (!medicamentoExiste) {
                return res.status(422).send({
                    mensagem: "Medicamento não encontrado em nosso sistema!"
                })
            }

            await MedicamentoModel.findOneAndUpdate(
                { nomeMedicamento: nomeMedicamento },
                { nomeMedicamento: novoNomeMed, quantidadeDisponivel: novaQuantidade }
            )

            return res.status(200).send({
                mensagem: "Informações alteradas com sucesso!"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                mensagem: "Erro ao alterar as informações desse medicamento!"
            })
        }
    }

    static async excluirMed(req, res) {
        const { nomeMedicamento, laboratorio, quantidadeDisponivel, valorDoMedicamento } = req.body

        if (!nomeMedicamento || !laboratorio || quantidadeDisponivel <= 0 || valorDoMedicamento <= 0) {
            return res.status(400).send({
                mensagem: "Todos os campos devem ser preenchidos corretamente!"
            })
        }

        try {
            const medicamentoExiste = await MedicamentoModel.findOne({
                nomeMedicamento,
                laboratorio,
                valorDoMedicamento,
                quantidadeDisponivel
            })

            if (!medicamentoExiste) {
                return res.status(400).send({
                    mensagem: "Medicamento não encontrado!"
                })
            }

            await MedicamentoModel.findOneAndDelete({
                nomeMedicamento,
                laboratorio,
                valorDoMedicamento,
                quantidadeDisponivel
            })

            return res.status(200).send({
                mensagem: "Medicamento excluído com sucesso!"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).send({
                mensagem: "Erro ao excluir medicamento!"
            })
        }
    }
}
