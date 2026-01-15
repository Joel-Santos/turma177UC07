import prisma from "../infra/prisma.js";

export default class UsuarioModel{

    static async listar(){
        return prisma.aluno.findMany({
            include: {curso: true}
        });
    }
    static async buscarPorId(id){
        return prisma.aluno.findUnique(
            {
                where: {id: Number(id)}
            }
        )
    }
    static async criar(dados){
        return prisma.aluno.create(
            {
                data: dados
            }
        )
    }
    static async atualizar(id, dados){
        return prisma.aluno.update(
            {
                where: {id: Number(id)},
                data: dados
            }
        )
    }
    static async deletar(id){
        return prisma.aluno.delete(
            {
                where: {id: Number(id)}
            }
        )
    }

    

}