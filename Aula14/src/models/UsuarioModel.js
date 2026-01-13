import prisma from "../infra/prisma.js";

export default class UsuarioModel{

    static async listar(){
        return prisma.usuario.findMany();
    }
    static async buscarPorId(id){
        return prisma.usuario.findUnique(
            {
                where: {id: Number(id)}
            }
        )
    }
    static async criar(dados){
        return prisma.usuario.create(
            {
                data: dados
            }
        )
    }
    static async atualizar(id, dados){
        return prisma.usuario.update(
            {
                where: {id: Number(id)},
                data: dados
            }
        )
    }
    static async deletar(id){
        return prisma.usuario.delete(
            {
                where: {id: Number(id)}
            }
        )
    }

    

}