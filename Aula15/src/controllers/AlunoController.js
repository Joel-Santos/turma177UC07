import AlunoModel from "../models/AlunoModel.js";

export default class AlunoController{

    static async listar(req, res){
        try {
            const alunos = await AlunoModel.listar();
            if(!alunos || alunos.length === 0){
                res.status(404).json({msg: "Nenhum aluno cadastrado"});
                return
                
            }
            res.status(200).json({msg: "Alunos encontrados", alunos})
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao listar alunos",
                    erro: error.message
                }
            )
        }

    }
}