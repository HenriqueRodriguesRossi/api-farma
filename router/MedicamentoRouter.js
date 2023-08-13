const router = require("express").Router()
const MedicamentoController = require("../controller/MedicamentoController")

router.post("/novo/med", MedicamentoController.cadastraMed)
router.get("/pesquisar", MedicamentoController.buscaMed)
router.put("/alterar/medicamento", MedicamentoController.alterarMed)
router.delete("/exclusao/medicamento", MedicamentoController.excluirMed)

module.exports = router