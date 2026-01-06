import { Express, Request, Response } from "express";
import EditarVaga from "../../core/useCase/vaga/EditarVaga";

export default class EditarVagaController {
  constructor(
    private servidor: Express,
    private casoDeUso: EditarVaga,
    ...middleware: any[]
  ) {
    const editar = async (req: Request, res: Response) => {
      try {
        console.log("chegou no controller da vaga")
        const Ong = req.usuario;
        const ongId = Ong?.id
        const {id} = req.params
        const vaga = {
          id,
          titulo: req.body.titulo,
          descricao: req.body.descricao,
          requisitos: req.body.requisitos,
          quantidade: req.body.quantidade,
          status: req.body.status,
          duracao: req.body.duracao,
          localizacao: req.body.localizacao,
          tipoTrabalho: req.body.tipoTrabalho,
          latitude: req.body.latitude,
          longitude: req.body.longitude,
          ongId
        };

        const vagaAtualizada = await this.casoDeUso.executar(vaga);
        res.status(200).json(vagaAtualizada)
      } catch (error:any) {
        console.log(error,"erro no controler")
        res.status(400).json({message:"Erro ao atualizar vaga"})
      }
    };
    this.servidor.put("/editar/vaga/:id",...middleware, editar)
  }
}
