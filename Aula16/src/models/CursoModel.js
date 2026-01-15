import prisma from "../infra/prisma.js";

export default class CursoModel{

    static async criar(nome, descricao){
        return prisma.curso.create({
            data:{
                nome, descricao
            }
        });
    } 

    static async listar(){
        return prisma.curso.findMany({
            include: {alunos: true}
        })
    } 

    static async buscarPorId(id){
        return prisma.curso.findUnique({
            where: {id},
            include: {alunos: true}
        })
    }

    static async atualizar(id, nome, descricao) {
        return prisma.curso.update({
            where: {id},
            data: {nome, descricao}
        })
    }
    
    static async deletar(id){
        return prisma.curso.delete({
            where: {id}
        })
    }
}