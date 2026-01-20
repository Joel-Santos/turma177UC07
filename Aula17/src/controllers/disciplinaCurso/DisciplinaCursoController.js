import CursoDisciplinaModel from "../../models/cursoDisciplina/CursoDisciplinaModel.js";
import CursoModel from "../../models/curso/CursoModel.js";
import DisciplinaModel from "../../models/disciplina/DisciplinaModel.js";

export default class CursoDisciplinaController {

    static async vincular(req, res) {
        try {
            const { cursoId, disciplinaId } = req.body;

            if (!cursoId || !disciplinaId) {
                return res.status(400).json({
                    msg: "cursoId e disciplinaId são obrigatórios"
                });
            }

            const cursoIdNumber = Number(cursoId);
            const disciplinaIdNumber = Number(disciplinaId);

            if (isNaN(cursoIdNumber) || isNaN(disciplinaIdNumber)) {
                return res.status(400).json({
                    msg: "IDs inválidos"
                });
            }

            // verifica se curso existe
            const curso = await CursoModel.buscarPorId(cursoIdNumber);
            if (!curso) {
                return res.status(404).json({ msg: "Curso não encontrado" });
            }

            // verifica se disciplina existe
            const disciplina = await DisciplinaModel.buscarPorId(disciplinaIdNumber);
            if (!disciplina) {
                return res.status(404).json({ msg: "Disciplina não encontrada" });
            }

            const vinculo = await CursoDisciplinaModel.vincular(
                cursoIdNumber,
                disciplinaIdNumber
            );

            return res.status(201).json({
                msg: "Disciplina vinculada ao curso com sucesso",
                vinculo
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao vincular disciplina ao curso",
                erro: error.message
            });
        }
    }

    static async listarPorCurso(req, res) {
        try {
            const { cursoId } = req.params;
            const cursoIdNumber = Number(cursoId);

            if (isNaN(cursoIdNumber)) {
                return res.status(400).json({ msg: "ID do curso inválido" });
            }

            // verifica se curso existe
            const curso = await CursoModel.buscarPorId(cursoIdNumber);
            if (!curso) {
                return res.status(404).json({ msg: "Curso não encontrado" });
            }

            const disciplinas = await CursoDisciplinaModel.listarPorCurso(cursoIdNumber);

            if (!disciplinas || disciplinas.length === 0) {
                return res.status(404).json({
                    msg: "Nenhuma disciplina vinculada a este curso"
                });
            }

            return res.status(200).json({
                msg: "Disciplinas do curso encontradas",
                disciplinas
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar disciplinas do curso",
                erro: error.message
            });
        }
    }

    static async desvincular(req, res) {
        try {
            const { id } = req.params;
            const idNumber = Number(id);

            if (isNaN(idNumber)) {
                return res.status(400).json({ msg: "ID inválido" });
            }

            const vinculoRemovido = await CursoDisciplinaModel.desvincular(idNumber);

            return res.status(200).json({
                msg: "Disciplina desvinculada do curso com sucesso",
                vinculo: vinculoRemovido
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao desvincular disciplina do curso",
                erro: error.message
            });
        }
    }
}
