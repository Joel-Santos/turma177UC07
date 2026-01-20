import DisciplinaModel from "../../models/disciplina/DisciplinaModel.js";

export default class DisciplinaController {

    static async listar(req, res) {
        try {
            const disciplinas = await DisciplinaModel.listar();

            if (!disciplinas || disciplinas.length === 0) {
                return res.status(404).json({ msg: "Nenhuma disciplina cadastrada" });
            }

            return res.status(200).json({
                msg: "Disciplinas encontradas",
                disciplinas
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao listar disciplinas",
                erro: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const { id } = req.params;
            const idNumber = Number(id);

            if (isNaN(idNumber)) {
                return res.status(400).json({ msg: "ID inválido" });
            }

            const disciplina = await DisciplinaModel.buscarPorId(idNumber);

            if (!disciplina) {
                return res.status(404).json({ msg: "Disciplina não encontrada" });
            }

            return res.status(200).json({
                msg: "Disciplina encontrada",
                disciplina
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar disciplina",
                erro: error.message
            });
        }
    }

    static async criar(req, res) {
        try {
            const { nome, cargaHoraria } = req.body;

            if (!nome || !cargaHoraria) {
                return res.status(400).json({
                    msg: "Dados obrigatórios não fornecidos"
                });
            }

            const disciplinaCriada = await DisciplinaModel.criar({
                nome,
                cargaHoraria
            });

            return res.status(201).json({
                msg: "Disciplina criada com sucesso",
                disciplina: disciplinaCriada
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao criar disciplina",
                erro: error.message
            });
        }
    }

    static async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { nome, cargaHoraria } = req.body;
            const idNumber = Number(id);

            if (isNaN(idNumber)) {
                return res.status(400).json({ msg: "ID inválido" });
            }

            if (!nome || !cargaHoraria) {
                return res.status(400).json({
                    msg: "Dados obrigatórios não fornecidos"
                });
            }

            // verifica se existe antes de atualizar
            const disciplinaExistente = await DisciplinaModel.buscarPorId(idNumber);
            if (!disciplinaExistente) {
                return res.status(404).json({ msg: "Disciplina não encontrada" });
            }

            const disciplinaAtualizada = await DisciplinaModel.atualizar(idNumber, {
                nome,
                cargaHoraria
            });

            return res.status(200).json({
                msg: "Disciplina atualizada com sucesso",
                disciplina: disciplinaAtualizada
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao atualizar disciplina",
                erro: error.message
            });
        }
    }

    static async deletar(req, res) {
        try {
            const { id } = req.params;
            const idNumber = Number(id);

            if (isNaN(idNumber)) {
                return res.status(400).json({ msg: "ID inválido" });
            }

            // verifica se existe antes de deletar
            const disciplinaExistente = await DisciplinaModel.buscarPorId(idNumber);
            if (!disciplinaExistente) {
                return res.status(404).json({ msg: "Disciplina não encontrada" });
            }

            const disciplinaDeletada = await DisciplinaModel.deletar(idNumber);

            return res.status(200).json({
                msg: "Disciplina deletada com sucesso",
                disciplina: disciplinaDeletada
            });

        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao deletar disciplina",
                erro: error.message
            });
        }
    }
}
