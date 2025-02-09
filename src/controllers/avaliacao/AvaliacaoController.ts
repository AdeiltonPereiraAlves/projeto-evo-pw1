import { Express, Request, Response } from "express";
import RegistrarAvaliacao from "../../core/useCase/Avaliacao/RegistrarAvaliacao";
import BuscarAvaliacaoPorId from "../../core/useCase/Avaliacao/BuscarAvaliacaoPorId";
import AtualizarAvaliacao from "../../core/useCase/Avaliacao/AtualizarAvaliacao";
import ExcluirAvaliacao from "../../core/useCase/Avaliacao/ExcluirAvaliacao";
import AvaliacaoType from "../../@types/AvaliacaoType";

export default class AvaliacaoController {
  constructor(
    private servidor: Express,
    private registrarAvaliacao: RegistrarAvaliacao,
    private buscarAvaliacaoPorId: BuscarAvaliacaoPorId,
    private atualizarAvaliacao: AtualizarAvaliacao,
    private excluirAvaliacao: ExcluirAvaliacao,
    ...middleware: any[]
  ) {
    // Registrar Avaliação
    const registrar = async (req: Request, res: Response) => {
      try {
        const avaliacao: AvaliacaoType = {
          voluntarioId: req.body.voluntarioId,
          ongId: req.body.ongId,
          frequencia: req.body.frequencia,
          tipo: req.body.tipo,
          comentario: req.body.comentario,
          nota: req.body.nota,
        };
        const novaAvaliacao = await this.registrarAvaliacao.executar(avaliacao);
        res.status(201).json(novaAvaliacao);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Buscar Avaliação por ID
    const buscarPorId = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const avaliacao = await this.buscarAvaliacaoPorId.executar(id);
        res.status(200).json(avaliacao);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Atualizar Avaliação
    const atualizar = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const avaliacao: AvaliacaoType = {
          id,
          ...req.body,
        };
        const avaliacaoAtualizada = await this.atualizarAvaliacao.executar(avaliacao);
        res.status(200).json(avaliacaoAtualizada);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Excluir Avaliação
    const excluir = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const resultado = await this.excluirAvaliacao.executar(id);
        res.status(200).json(resultado);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Rotas
    this.servidor.post("/avaliacao/registrar", ...middleware, registrar);
    this.servidor.get("/avaliacao/:id", ...middleware, buscarPorId);
    this.servidor.put("/avaliacao/:id", ...middleware, atualizar);
    this.servidor.delete("/avaliacao/:id", ...middleware, excluir);
  }
}