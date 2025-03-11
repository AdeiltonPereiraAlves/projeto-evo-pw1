import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import AvaliacaoType from "../../@types/AvaliacaoType";
import RegistrarAvaliacaoVoluntario from "../../core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import ExcluirAvaliacaoVoluntario, { excluirAvaliacaoDto } from "../../core/useCase/Avaliacao/ExcluirAvaliacaoVoluntario";
export default class ExcluirAvaliacaoVoluntarioController{
    constructor(
      private servidor: Express,
      private casoDeUso: ExcluirAvaliacaoVoluntario,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {

    try {
        console.log("chegou no controler")
         const voluntario= req.usuario
        const voluntarioId = voluntario.id

        const {id} = req.params
         const excluir: excluirAvaliacaoDto= {
             avaliacaoId:id,
             voluntarioId
         }
         
         
         const novaAvaliacao = await this.casoDeUso.executar(excluir);
         res.status(201).json(novaAvaliacao);
       } catch (error: any) {
         res.status(400).send(error.message);
       }
        
      }
      this.servidor.delete("/excluir/avaliacao/:id",...middleware, registraOng)
    }
}