import { Express, Request, Response } from "express";
import RegistrarInscricao from "../../core/useCase/Inscricao/RegistrarInscricao";
import BuscarInscricaoPorId from "../../core/useCase/Inscricao/BuscarInscricaoPorId";
import AtualizarInscricao from "../../core/useCase/Inscricao/AtualizarInscricao";
import ExcluirInscricao from "../../core/useCase/Inscricao/ExcluirInscricao";
import InscricaoType, { StatusInscricao } from "../../@types/InscricaoType";

export default class InscricaoController {
  constructor(
    private servidor: Express,
    private registrarInscricao: RegistrarInscricao,
    private buscarInscricaoPorId: BuscarInscricaoPorId,
    private atualizarInscricao: AtualizarInscricao,
    private excluirInscricao: ExcluirInscricao,
    ...middleware: any[]
  ) {
    // Registrar Inscrição
    const registrar = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const voluntario = req.usuario;
        const voluntarioId = voluntario.id;
        const { ativo } = req.body;

        console.log(id, "id da vaga");
      

        const inscricao: InscricaoType = {
          voluntarioId,
          vagaId: id,
          status: StatusInscricao.pendente,
          ativo,
        };
        const novaInscricao = await this.registrarInscricao.executar(inscricao);
        res.status(201).json(novaInscricao);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Buscar Inscrição por ID
    const buscarPorId = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const inscricao = await this.buscarInscricaoPorId.executar(id);
        res.status(200).json(inscricao);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Atualizar Inscrição
    const atualizar = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const voluntario = req.usuario;
        const voluntarioId = voluntario.id;
        const { ativo } = req.body;

        console.log(id, "id da vaga");
      
         
        const inscricao:any = {
          voluntarioId,
          inscricaoId: id,
          ativo,
        };
        const inscricaoAtualizada = await this.atualizarInscricao.executar(
          inscricao
        );
        res.status(200).json(inscricaoAtualizada);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Excluir Inscrição
    const excluir = async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        const voluntario = req.usuario
        const voluntarioId = voluntario.id
        const excluirInscricaoDto = {
          id,
          voluntarioId,

        }
        const resultado = await this.excluirInscricao.executar(excluirInscricaoDto);
        res.status(200).json(resultado);
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    // Rotas
    this.servidor.post("/inscricao/:id", ...middleware, registrar);
    this.servidor.get("/inscricao/:id", ...middleware, buscarPorId);
    this.servidor.put("/atualizar/inscricao/:id", ...middleware, atualizar);
    this.servidor.delete("/inscricao/:id", ...middleware, excluir);
  }
}
