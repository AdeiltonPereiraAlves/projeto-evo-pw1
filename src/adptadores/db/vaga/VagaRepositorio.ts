import Vagatype from "../../../@types/VagaType";
import Usuario from "../../../core/model/usuario/Usuario";
import VagaRepositorioPort from "../../../core/model/vaga/VagaRepositorio";
import prismaDb from "../../prismaDb/Prisma";
export default class VagaRepositorio implements VagaRepositorioPort {
    async registrar(vaga: Vagatype) {
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
    async buscar() {
        try {
            const vagas = await prismaDb.vaga.findMany({include:{
                ong:{include:{usuario:true}},
               
            }})

            return vagas;
        } catch (error) {
            
            throw new Error("erro ao buscar vagas.");
        }
    }
    
    
}