import { StatusInscricao } from "../../@types/InscricaoType";
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
                const ong = req.usuario
                const ongId = ong?.id!
                const {id} = req.params
                const aprovar:any = {
                    
                    status: StatusInscricao,
                    ongId,
                    vagaId: id
                    
                }
                console.log(aprovar, "Aprovar")
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