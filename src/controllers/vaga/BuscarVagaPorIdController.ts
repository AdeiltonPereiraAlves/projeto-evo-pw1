import { Express, Request, Response } from "express";
import BuscarVagas from "../../core/useCase/vaga/ListarVagas";
import BuscarVagaPorId from "../../core/useCase/vaga/BuscarVagaPorId";
export default class ListarVagaPorIdController{
    constructor(
        private servidor: Express,
        private casoDeUso: BuscarVagaPorId,
        ...middleware: any[]
    ){
       const buscar = async (req:Request, res:Response) => {
           try {
             const {id} = req.params
            
              const vaga = await this.casoDeUso.executar(id);
              res.status(200).json(vaga)
           } catch (error) {
            res.status(400).json({messagem: "Erro ao buscar vaga"})
           }
       }
       this.servidor.get("/buscar/vaga/:id",...middleware, buscar)
    }
}