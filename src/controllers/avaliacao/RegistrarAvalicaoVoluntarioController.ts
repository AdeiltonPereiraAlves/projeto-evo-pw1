import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import AvaliacaoType from "../../@types/AvaliacaoType";
import RegistrarAvaliacaoVoluntario from "../../core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
export default class RegistrarAvalicaoVoluntarioController{
    constructor(
      private servidor: Express,
      private casoDeUso: RegistrarAvaliacaoVoluntario,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {
    try {
         const voluntario= req.usuario
        
 
           const avaliacao: AvaliacaoType = {
             voluntarioId: voluntario.id,
             ongId: req.params.id,
             tipo: voluntario.tipo,
             avaliadoId: req.params.id,
             comentario: req.body.comentario,
             nota: req.body.nota,
           };
         
         const novaAvaliacao = await this.casoDeUso.executar(avaliacao);
         res.status(201).json(novaAvaliacao);
       } catch (error: any) {
         res.status(400).send(error.message);
       }
        
      }
      this.servidor.post("/avaliar/ong/:id",...middleware, registraOng)
    }
}