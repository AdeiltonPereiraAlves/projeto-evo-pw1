import ExcluirVaga, { deletarVagaDto } from "../../core/useCase/vaga/ExcluirVaga";
import { Express, Request, Response } from "express";
export default class ExcluirVagaController{
    constructor(
        private servidor: Express,
        private casoDeUso: ExcluirVaga,
        ...middleware:any[]
    ){
        const excluir = async (req:Request, res:Response) => {
            try {
                const ong = req.usuario
                const ongId = ong.id!
                const {id} = req.params
                
               const parametrosID: deletarVagaDto  = {
                id: id,
                idOng: ongId
               }

                const resultado =await this.casoDeUso.executar(parametrosID)

                console.log(resultado, "resultado")
                res.status(200).json(resultado)

            } catch (error) {
               res.status(400).json({messagem: "Erro ao deletar vaga"})
            }
        }
        this.servidor.delete("/deletar/vaga/:id", ...middleware, excluir)
    }
}