import UsuarioController from "../controllers/usuarioController.js";
import express from "express";
const router = express.Router();

router.get("/", UsuarioController.listar);
router.post("/", UsuarioController.criar);
router.post("/login", UsuarioController.login);


export default router;