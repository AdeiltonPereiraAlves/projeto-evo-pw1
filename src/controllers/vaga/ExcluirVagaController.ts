import ExcluirVaga from "../../core/useCase/vaga/ExcluirVaga";
import { Express, Request, Response } from "express";
export default class ExcluirVagaController{
    constructor(
        private servidor: Express,
        private casoDeUso: ExcluirVaga,
        ...middleware:any[]
    ){
        const excluir = async (req:Request, res:Response) => {
            try {
                const {id} = req.params

                const resultado =await this.casoDeUso.executar(id)
                res.status(200).json(resultado)

            } catch (error) {
                throw new Error("Erro ao deletar vaga")
            }
        }
        this.servidor.delete("/deletar/vaga/:id", ...middleware, excluir)
    }
}