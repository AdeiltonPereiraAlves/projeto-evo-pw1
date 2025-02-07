import VagaType from "../../../@types/VagaType";
import Usuario from "../../../core/model/usuario/Usuario";
import VagaRepositorioPort from "../../../core/useCase/vaga/VagaRepositorio";
import prismaDb from "../../prismaDb/Prisma";
export default class VagaRepositorio implements VagaRepositorioPort {
    async excluir(id:string): Promise<any> {
        try {
            const vagaExistente = await this.buscarPorId(id)
            if(!vagaExistente){
            throw new Error("ID nao existe")
            }
            const resultado = await prismaDb.vaga.delete({where:{id}})

            if(!resultado){
                throw new Error("Erro ao deletar vaga")
            }
            return resultado
        } catch (error) {
            throw new Error("Erro ao deletar vaga")
            
        }
        
    }
    async registrar(vaga: VagaType) {
        try {
            console.log(vaga, "vaga repo")
            const vagaRegistrada = await prismaDb.vaga.create({
                data: {
                    id:vaga.id,
                    titulo: vaga.titulo,
                    descricao: vaga.descricao,
                    requisitos:vaga.requisitos,
                    status: vaga.status,
                    duracao: vaga.duracao,
                    localizacao: vaga.localizacao,
                    tipoTrabalho: vaga.tipoTrabalho,
                    latitude: vaga.latitude,
                    longitude: vaga.longitude,
                    ongId: vaga.ongId,

                },
               
            })
            
            console.log(vagaRegistrada, "vaga registrada")
           return vagaRegistrada
        } catch (error) {
            console.log(error, "erro banco")
            throw new Error("erro no banco.");
        }
    }
    async buscar():Promise<VagaType[]| any> {
        try {
            const vagas = await prismaDb.vaga.findMany({include:{
                ong:{include:{usuario:true}},
               
            }})

            return vagas;
        } catch (error) {
            
            throw new Error("erro ao buscar vagas.");
        }
    }
    async buscarPorId(id:string){
        try {
            const existeVaga = await prismaDb.vaga.findUnique({where:{id}})
            return existeVaga
        } catch (error) {
            throw new Error("erro ao buscar vaga por id.");
        }
    }
    
    
}