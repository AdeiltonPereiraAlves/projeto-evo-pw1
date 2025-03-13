import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import AvaliacaoType from "../../@types/AvaliacaoType";
import RegistrarAvaliacaoVoluntario from "../../core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import RegistrarAvaliacaoOng from "../../core/useCase/Avaliacao/RegistrarAvaliacaoOng";
import AtualizarAvaliacao, { atualizaAvaliacaoDto } from "../../core/useCase/Avaliacao/AtualizarAvaliacao";
import AtualizarAvaliacaoOng from "../../core/useCase/Avaliacao/AtualizarAvaliacaoOng";
export default class AtualizaarAvalicaoOngController {
  constructor(
    private servidor: Express,
    private casoDeUso: AtualizarAvaliacaoOng,
    ...middleware: any[]
  ) {
    const registraOng = async (req: Request, res: Response) => {
      try {
        const ong = req.usuario;

        const avaliacao: atualizaAvaliacaoDto = {
          avaliadorId: ong.id,
          avaliacaoId: req.params.id!,
          comentario: req.body.comentario,
          nota: req.body.nota,
        };

        console.log(avaliacao, "avalia");

        const novaAvaliacao = await this.casoDeUso.executar(avaliacao);
        res.status(201).json(novaAvaliacao);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };
    this.servidor.put("/atualizar/avaliacao/ong/:id", ...middleware, registraOng);
  }
}
