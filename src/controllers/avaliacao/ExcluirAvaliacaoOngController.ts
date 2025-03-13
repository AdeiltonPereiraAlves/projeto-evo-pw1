import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import AvaliacaoType from "../../@types/AvaliacaoType";
import RegistrarAvaliacaoVoluntario from "../../core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import ExcluirAvaliacaoVoluntario, { excluirAvaliacaoDto } from "../../core/useCase/Avaliacao/ExcluirAvaliacaoVoluntario";
import ExcluirAvaliacaoOng from "../../core/useCase/Ong/ExcluirAvaliacaoOng";
export default class ExcluirAvaliacaoOngController{
    constructor(
      private servidor: Express,
      private casoDeUso: ExcluirAvaliacaoOng,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {

    try {
        console.log("chegou no controler")
         const ong= req.usuario
        const ongId = ong.id

        const {id} = req.params
         const excluir= {
             avaliacaoId:id,
             ongId
         }
         
         
         const novaAvaliacao = await this.casoDeUso.executar(excluir);
         res.status(201).json(novaAvaliacao);
       } catch (error: any) {
         res.status(400).send(error.message);
       }
        
      }
      this.servidor.delete("/excluir/avaliacao/ong/:id",...middleware, registraOng)
    }
}