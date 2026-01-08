import UsuarioModel from "../models/UsuarioModel.js";

export default class UsuarioController{

    static async listar(req, res){
        try {
            const usuarios = await UsuarioModel.listar();
            if(!usuarios || usuarios.length === 0){
                res.status(404).json({msg: "Nenhum usuário cadastrado"});
                return
            }
            res.status(200).json({msg: "Usuários encontrados", usuarios})
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao listar usuarios",
                    erro: error.message
                }
            )
        }
    }


}