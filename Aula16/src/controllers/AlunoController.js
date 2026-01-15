import AlunoModel from "../models/AlunoModel.js";
import CursoModel from "../models/CursoModel.js";

export default class AlunoController {

    static async listar(req, res) {
        try {
            const alunos = await AlunoModel.listar();
            if (!alunos || alunos.length === 0) {
                res.status(404).json({ msg: "Nenhum aluno cadastrado" });
                return

            }
            res.status(200).json({ msg: "Alunos encontrados", alunos })
        } catch (error) {
            res.status(500).json(
                {
                    msg: "Erro ao listar alunos",
                    erro: error.message
                }
            )
        }
    }

    static async criar(req, res) {
        try {
            const { nome, email, matricula, cursoId } = req.body;
            if (!nome || !email || !matricula || !cursoId) {
                res.status(400).json({ msg: "Todos os campos devem ser preenchidos." });
                return
            }
            const curso = await CursoModel.buscarPorId(cursoId);
            if (!curso) {
                res.status(400).json({ msg: "Curso Inválido" });
                return
            }
            const alunoCriado = await AlunoModel.criar({ nome, email, matricula, cursoId })
            if (alunoCriado) {
                res.status(201).json({ msg: "Novo aluno criado com sucesso", alunoCriado });
                return
            }
        } catch (error) {
            res.status(500).json({ msg: "Erro interno ao criar o aluno", erro: error.message })
        }
    }
    
    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const aluno = await AlunoModel.buscarPorId(id);
            if (!aluno) {
                res.status(404).json({ msg: "Aluno não encontrado" });
                return
            }
            res.status(200).json({ msg: "Aluno encontrado", aluno });
        } catch (error) {
            res.status(500).json({ msg: "Erro ao buscar aluno", erro: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body;
            const alunoExistente = await AlunoModel.buscarPorId(id);
            if (!alunoExistente) {
                res.status(404).json({ msg: "Aluno não encontrado" });
                return
            }
            // If cursoId is being updated, validate the curso exists
            if (dados.cursoId) {
                const curso = await CursoModel.buscarPorId(dados.cursoId);
                if (!curso) {
                    res.status(400).json({ msg: "Curso Inválido" });
                    return
                }
            }
            const alunoAtualizado = await AlunoModel.atualizar(id, dados);
            res.status(200).json({ msg: "Aluno atualizado com sucesso", alunoAtualizado });
        } catch (error) {
            res.status(500).json({ msg: "Erro ao atualizar aluno", erro: error.message });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const alunoExistente = await AlunoModel.buscarPorId(id);
            if (!alunoExistente) {
                res.status(404).json({ msg: "Aluno não encontrado" });
                return
            }
            await AlunoModel.deletar(id);
            res.status(200).json({ msg: "Aluno deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ msg: "Erro ao deletar aluno", erro: error.message });
        }
    }



}