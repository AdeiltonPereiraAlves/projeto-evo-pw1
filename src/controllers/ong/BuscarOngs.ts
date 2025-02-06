import BuscarOngs from "../../core/useCase/Ong/BuscarOngs";
import { Express, Request, Response } from "express";
export default class BuscarOngController{
    constructor(
        private servidor: Express,
        private casoDeUso: BuscarOngs,
        ...middleware:any []
    ){
        const buscar = async(req:Request, res: Response) =>{
            try {
                const ongs = await this.casoDeUso.executar()
                console.log(ongs, "ongs")
                res.status(200).json(ongs)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }

        this.servidor.get("/buscar/ongs", ...middleware, buscar)
    }
}