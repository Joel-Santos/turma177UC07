import express from "express"
import AlunoController from "../../controllers/aluno/AlunoController.js";
const router = express.Router();

router.get("/", AlunoController.listar);
router.post("/", AlunoController.criar);
router.get("/:id", AlunoController.buscarPorId);
router.put("/:id", AlunoController.atualizar);
router.delete("/:id", AlunoController.deletar);

export default router;

