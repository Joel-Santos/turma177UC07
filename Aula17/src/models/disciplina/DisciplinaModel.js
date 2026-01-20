import prisma from "../../infra/prisma.js"

export default class DisciplinaModel {

    static async listar() {
        return prisma.disciplina.findMany({
            include: { cursoDisciplinas: { include: { curso: true } } }
        });
    }

    static async buscarPorId(id) {
        return prisma.disciplina.findUnique({
            where: { id: Number(id) },
            include: { cursoDisciplinas: { include: { curso: true } } }
        });
    }

    static async criar(dados) {
        return prisma.disciplina.create({
            data: {
                nome: dados.nome,
                cargaHoraria: dados.cargaHoraria,
            }
        });
    }

    static async atualizar(id, dados) {
        return prisma.disciplina.update({
            where: { id: Number(id) },
            data: {
                nome: dados.nome,
                cargaHoraria: dados.cargaHoraria,
            }
        });
    }

    static async deletar(id) {
        return prisma.disciplina.delete({
            where: { id: Number(id) }
        });
    }
}