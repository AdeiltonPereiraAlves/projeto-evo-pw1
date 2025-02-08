import InscricaoRepositorioPort from "../../../core/useCase/inscricoes/IncricoesRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";

export default class InscricaoRepositorio implements InscricaoRepositorioPort{
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
    
}