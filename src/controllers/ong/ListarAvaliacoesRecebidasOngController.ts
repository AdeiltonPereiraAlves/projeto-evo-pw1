import buscarVoluntarios from "../../core/useCase/Voluntario/BuscarVoluntarios";
import { Express, Request, Response } from "express";
import ListarInscricoesVoluntario from "../../core/useCase/Voluntario/ListarInscricoesVoluntario";
import ListarAvaliacoesVoluntario, { avaliacaoDto } from "../../core/useCase/Voluntario/ListarAvaliacoesVoluntario";
import ListarAvaliacoesRecebidas from "../../core/useCase/Voluntario/ListarAvaliacoesRecebidas";
import Tipo from "../../@types/Tipo";
import ListarAvaliacoesRecebidasOng from "../../core/useCase/Ong/ListarAvaliacoesRecebidasOng";
export default class ListarAvaliacoesRecebidasOngController {
  constructor(
    private servidor: Express,
    private casoDeUso: ListarAvaliacoesRecebidasOng,
    ...middleware: any[]
  ) {
    const buscar = async (req: Request, res: Response) => {
      try {
        const ong = req.usuario; // pegando o payload depois do login com as informaões
        console.log(ong, "ong da req");

        const id = ong?.id;
        const avaliadoDto: avaliacaoDto = {
          id,
          tipo:Tipo.VOLUNTARIO,
        };

        console.log(id, "id");
        const result = await this.casoDeUso.executar(avaliadoDto);
        console.log(result, "res");

        res.status(200).json(result);
      } catch (error: any) {
        res.status(403).send(error.message);
      }
    };

    this.servidor.get("/avaliacoes/recebidas", ...middleware, buscar);
  }
}
