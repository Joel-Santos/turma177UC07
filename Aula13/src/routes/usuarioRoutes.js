import UsuarioController from "../controllers/usuarioController.js";
import { autenticarToken } from "../middlewares/authMiddleware.js";
import express from "express";
const router = express.Router();

//Rotas publicas
router.post("/login", UsuarioController.login);
router.post("/", UsuarioController.criar);

//Rota privada
router.get("/", autenticarToken, UsuarioController.listar);
router.get("/:id", autenticarToken, UsuarioController.buscarPorId);
router.put("/:id", autenticarToken, UsuarioController.atualizar);
router.delete("/:id", autenticarToken, UsuarioController.deletar);
router.patch("/:id", autenticarToken, UsuarioController.atualizarParcialmente);
router.get("/perfil/dados", autenticarToken, UsuarioController.perfil);

export default router;