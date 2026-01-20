import express from "express";
import DisciplinaController from "../../controllers/disciplina/DisciplinaController.js";

const router = express.Router();

router.get("/", DisciplinaController.listar);
router.post("/", DisciplinaController.criar);
router.get("/:id", DisciplinaController.buscarPorId);
router.put("/:id", DisciplinaController.atualizar);
router.delete("/:id", DisciplinaController.deletar);

export default router;
