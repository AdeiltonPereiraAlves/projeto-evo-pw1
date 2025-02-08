import InscricaoRepositorioPort from "../../../core/useCase/inscricoes/IncricoesRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";

export default class InscricaoRepositorio implements InscricaoRepositorioPort{
    async buscarPorId(id: string) {
        try {
            const inscricao = await  prismaDb.inscricao.findUnique({where:{id}})
            return inscricao
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }
   async excluir(dto:any) {
        try {
            const inscricaoExcluida = await prismaDb.inscricao.delete({
                where:{id:dto.id, voluntarioId:dto.voluntarioId},
                

            })
            return inscricaoExcluida
        } catch (error) {
            
            throw new Error("Erro ao excluir inscrião");
        }
    }
    async registrar(inscricao: any) {
        console.log("chegou no banco")
        try {
           const novaInscricao =  await prismaDb.inscricao.create({
                data:{
                    id:inscricao.id,
                    status:inscricao.status,
                    resultado: inscricao.resultado,
                    data: inscricao.data,
                    vagaId: inscricao.vagaId,
                    voluntarioId: inscricao.voluntarioId
                }
            })
            return novaInscricao
        } catch (error) {
            console.log(error, "error")
            throw new Error("Method not implemented.");
        }
    }
    async listaInscricoesDeVoluntario(id:string){
        console.log("chegou no db insc", id)
        try {
         const inscricoes =  await prismaDb.inscricao.findFirst(
            {where:{
            voluntarioId: id
          },
          include:{
            vaga:{
                include:{
                    ong:{
                        select:{
                            id:true,
                            cnpj: true,
                            areaAtuacao:true,

                            usuario:{
                                select: {
                                    id:true,
                                    nome: true,
    
                                }
                            }
                        },
                      
                        
                    }
                }
            }
          }
        })
        return inscricoes
        } catch (error) {
            console.log(error, "error")
            throw new Error("Method not implemented.");
        }
    }
   

    
}