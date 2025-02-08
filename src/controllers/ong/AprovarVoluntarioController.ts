import AprovarVoluntario, { aprovarDto } from "../../core/useCase/Ong/AprovarVoluntario";
import BuscarOngs from "../../core/useCase/Ong/BuscarOngs";
import { Express, Request, Response } from "express";
export default class AprovarVoluntarioController{
    constructor(
        private servidor: Express,
        private casoDeUso: AprovarVoluntario,
        ...middleware:any []
    ){
        const aprovar = async(req:Request, res: Response) =>{
            try {
                const {id} = req.params
                const aprovar:aprovarDto = {
                    id,
                    aprovado: req.body
                }
                const resultado = await this.casoDeUso.executar(aprovar)
                console.log(resultado, "resultado")
                res.status(200).json(resultado)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }

        this.servidor.patch("/aprovar/:id", ...middleware, aprovar)
    }
}  