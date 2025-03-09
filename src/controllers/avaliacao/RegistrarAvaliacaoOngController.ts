import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import AvaliacaoType from "../../@types/AvaliacaoType";
import RegistrarAvaliacaoVoluntario from "../../core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import RegistrarAvaliacaoOng from "../../core/useCase/Avaliacao/RegistrarAvaliacaoOng";
export default class RegistrarAvalicaoOngController{
    constructor(
      private servidor: Express,
      private casoDeUso: RegistrarAvaliacaoOng,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {
    try {
         const ong = req.usuario
        
 
           const avaliacao: AvaliacaoType = {
             voluntarioId: req.params.id,
             ongId: ong.id,
             avaliadoId: req.params.id,
             tipo: ong.tipo,
             frequencia: req.body.frequencia,
             comentario: req.body.comentario,
             nota: req.body.nota,
           };

           console.log(avaliacao,"avalia")
         
         const novaAvaliacao = await this.casoDeUso.executar(avaliacao);
         res.status(201).json(novaAvaliacao);
       } catch (error: any) {
         res.status(400).send(error.message);
       }
        
      }
      this.servidor.post("/avaliar/voluntario/:id",...middleware, registraOng)
    }
}