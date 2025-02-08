import { Express, Request, Response } from "express";
import CriarAvaliacao from "../../core/useCase/Avaliacao/criarAvaliacao";
import { Avaliacao } from "../../core/model/avaliacao/Avaliacao";

export default class AvaliacaoController {
  constructor(
    private servidor: Express,
    private casoDeUso: CriarAvaliacao,
    ...middleware: any[]  
  ) {
    const criarAvaliacao = async (req: Request, res: Response): Promise<void> => {
      try {
        
        const { voluntarioId, ongId, nota, comentario } = req.body;

        
        if (!voluntarioId || !ongId || typeof nota === 'undefined') {
          res.status(400).send("Dados incompletos para criar a avaliação.");
          return;
        }

        
        const avaliacaoDto: Omit<Avaliacao, 'id' | 'criadoEm'> = {
          voluntarioId,
          ongId,
          nota,
          comentario,
        };

        
        const avaliacaoCriada = await this.casoDeUso.executar(avaliacaoDto);

        
        res.status(201).json(avaliacaoCriada);

      } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message || "Erro ao criar avaliação.");
      }
    };

    this.servidor.post("/avaliacoes", ...middleware, criarAvaliacao);
  }
}
