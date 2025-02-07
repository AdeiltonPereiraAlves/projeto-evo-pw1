import { Express, Request, Response } from "express";
import BuscarVagas from "../../core/useCase/vaga/ListarVagas";
export default class ListarVagasVagasController{
    constructor(
        private servidor: Express,
        private casoDeUso: BuscarVagas,
        ...middleware: any[]
    ){
       const buscar = async (req:Request, res:Response) => {
           try {
              const vagas = await this.casoDeUso.executar();
              res.status(200).json(vagas)
           } catch (error) {
              throw new Error("Erro ao buscar vagas ")
           }
       }
       this.servidor.get("/listar/vagas",...middleware, buscar)
    }
}