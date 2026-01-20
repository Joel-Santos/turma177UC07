import prisma from "../prisma/prisma.js";

export default class CursoDisciplinaModel {

  static async vincular(cursoId, disciplinaId) {
    return prisma.cursoDisciplina.create({
      data: {
        cursoId: Number(cursoId),
        disciplinaId: Number(disciplinaId)
      }
    });
  }

  static async listarPorCurso(cursoId) {
    return prisma.cursoDisciplina.findMany({
      where: { cursoId: Number(cursoId) },
      include: { disciplina: true }
    });
  }

  static async desvincular(id) {
    return prisma.cursoDisciplina.delete({
      where: { id: Number(id) }
    });
  }
}
