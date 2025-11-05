import UsuarioController from "../controllers/usuarioController.js";
import { autenticarToken } from "../middlewares/authMiddleware.js";
import express from "express";
const router = express.Router();

router.get("/", autenticarToken, UsuarioController.listar);
router.post("/", UsuarioController.criar);
router.post("/login", UsuarioController.login);
router.get("/:id", autenticarToken, UsuarioController.buscarPorId);
router.put("/:id", autenticarToken, UsuarioController.atualizar);
router.delete("/:id", autenticarToken, UsuarioController.deletar);
router.patch("/:id", autenticarToken, UsuarioController.atualizarParcialmente);

export default router;