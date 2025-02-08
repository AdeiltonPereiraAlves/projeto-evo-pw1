import { Express, Request, Response } from "express";
import RegistrarVaga from "../../core/useCase/vaga/RegistrarVaga";
import VagaType from "../../@types/VagaType";
import RegistrarInscricao, { inscricaoDto } from "../../core/useCase/inscricoes/RegistrarInscricao";

export default class RegistrarInscricaoController{
    constructor(
        private servidor: Express,
        private casoDeUso: RegistrarInscricao,
        ...middleware: any[]
    ){
       const registrar = async (req: Request, res:Response) => {
             try {
                const usuario = req.usuario;

                console.log(usuario, "usuario vaga controler");
               
                
                
                const inscricao:inscricaoDto = {
                    status: req.body.status,
                    resultado: req.body.resultado,
                    vagaId: req.params.id,
                    voluntarioId: usuario?.id
                }
                console.log(inscricao, "inscricao")
                const novaVaga = await this.casoDeUso.executar(inscricao)
                res.status(200).json(novaVaga)
             } catch (error:any) {
                 console.log(error)
                 res.status(400).json({messagem: "Erro ao registrar inscricao"})
             }
       }
       this.servidor.post("/inscricao/:id",...middleware, registrar)
    }
}