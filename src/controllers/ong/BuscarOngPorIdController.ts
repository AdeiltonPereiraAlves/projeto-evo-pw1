import BuscarOngPorId from "../../core/useCase/Ong/BuscarOngPorId";
import { Express, Request, Response } from "express";
export default class BuscarOngPorIdController{
    constructor(
        private servidor: Express,
        private casoDeUso: BuscarOngPorId,
        ...middleware:any []
    ){
        const buscar = async(req:Request, res: Response) =>{

            try {
                const id = req.usuario.id

                const ongs = await this.casoDeUso.executar(id)
                console.log(ongs, "ongs")
                res.status(200).json(ongs)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }

        this.servidor.get("/perfil", ...middleware, buscar)
    }
}