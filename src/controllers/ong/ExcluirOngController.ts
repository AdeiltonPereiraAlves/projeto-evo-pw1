import ExcluirOng from "../../core/useCase/Ong/ExcluirOng";
import { Express, Request, Response } from "express";
export default class ExcluirOngController{
    constructor(
        private servidor: Express,
        private casoDeUso: ExcluirOng,
        ...middleware: any[]
    ){
        const excluirOng = async (req:Request, res:Response) => {
            try {
                //  const id = req.usuario!.id
                const {id} = req.usuario
                 
                 const respota = await this.casoDeUso.executar(id!)

                 res.status(200).json(respota)

                
             } catch (error) {
                res.status(404).send()
                console.log(error)
                throw new Error("Erro ao excluir ong")
             }
        }

        this.servidor.delete("/deletar",...middleware, excluirOng)
    }
}