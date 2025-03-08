import { StatusInscricao } from "../../@types/InscricaoType";
import AprovarVoluntario, { aprovarDto } from "../../core/useCase/Ong/AprovarVoluntario";
import BuscarOngs from "../../core/useCase/Ong/BuscarOngs";
import { Express, Request, Response } from "express";
import MudarStatusVaga from "../../core/useCase/Ong/MudarStatusVaga";
import Status from "../../@types/Status";
export default class MudarStatusVagaController{
    constructor(
        private servidor: Express,
        private casoDeUso: MudarStatusVaga,
        ...middleware:any []
    ){
        const aprovar = async(req:Request, res: Response) =>{
            try {
                const ong = req.usuario
                const ongId = ong?.id!
                const {id} = req.params //id da vaga
                const aprovar:any = {
                    
                    status: Status,
                    ongId,
                    vagaId: id
                    
                }
              
                const resultado = await this.casoDeUso.executar(aprovar)
                console.log(resultado, "resultado")
                res.status(200).json(resultado)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }

        this.servidor.patch("/status/:id", ...middleware, aprovar)
    }
}  