import prisma from "../infra/prisma.js";

export default class AlunoModel{

    static async listar(){
        return prisma.aluno.findMany();
    }

}