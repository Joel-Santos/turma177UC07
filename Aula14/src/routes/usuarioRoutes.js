import express from "express"
import UsuarioController from "../controllers/UsuarioController.js"
const router = express.Router();

router.get("/", UsuarioController.listar);


export default router;