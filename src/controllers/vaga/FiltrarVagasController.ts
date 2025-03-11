import { Express, Request, Response } from "express";
import BuscarVagas from "../../core/useCase/vaga/ListarVagas";
import BuscarVagaPorId from "../../core/useCase/vaga/BuscarVagaPorId";
import filtrarVagas from "../../core/useCase/vaga/FiltrarVagas";
export default class FiltrarVagaController{
    constructor(
        private servidor: Express,
        private casoDeUso: filtrarVagas,
        ...middleware: any[]
    ){
       const filtrar = async (req:Request, res:Response) => {
           try {
             const {termo} = req.body
            
              const vagaFiltrada = await this.casoDeUso.executar(termo);
              res.status(200).json(vagaFiltrada)
           } catch (error) {
            res.status(400).json({messagem: "Erro ao buscar vaga"})
           }
       }
       this.servidor.get("/filtrar/vagas",...middleware, filtrar)
    }
}