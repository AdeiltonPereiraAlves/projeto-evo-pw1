import BuscarOngs from "../../core/useCase/Ong/BuscarOngs";
import { Express, Request, Response } from "express";
import ListarVagasOng from "../../core/useCase/Ong/ListarVagasOng";
export default class ListarVagasOngController{
    constructor(
        private servidor: Express,
        private casoDeUso: ListarVagasOng,
        ...middleware:any []
    ){
        const buscar = async(req:Request, res: Response) =>{
            try {
                const ong = req.usuario
                const ongId = ong!.id!
            
               
                const listaVagas = await this.casoDeUso.executar(ongId)
                console.log(listaVagas, "v")
                res.status(200).json(listaVagas)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }

        this.servidor.get("/listar/vagas/ong", ...middleware, buscar)
    }
}