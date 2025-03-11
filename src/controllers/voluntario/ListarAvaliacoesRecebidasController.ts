import buscarVoluntarios from "../../core/useCase/Voluntario/BuscarVoluntarios";
import { Express, Request, Response } from "express";
import ListarInscricoesVoluntario from "../../core/useCase/Voluntario/ListarInscricoesVoluntario";
import ListarAvaliacoesVoluntario, { avaliacaoDto } from "../../core/useCase/Voluntario/ListarAvaliacoesVoluntario";
import ListarAvaliacoesRecebidas from "../../core/useCase/Voluntario/ListarAvaliacoesRecebidas";
import Tipo from "../../@types/Tipo";
export default class ListarAvaliacoesRecebidasController {
  constructor(
    private servidor: Express,
    private casoDeUso: ListarAvaliacoesRecebidas,
    ...middleware: any[]
  ) {
    const buscar = async (req: Request, res: Response) => {
      try {
        const voluntario = req.usuario; // pegando o payload depois do login com as informaões
        console.log(voluntario, "voluntario da req");

        const id = voluntario?.id;
        const avaliadoDto: avaliacaoDto = {
          id,
          tipo:Tipo.ONG,
        };

        console.log(id, "id");
        const result = await this.casoDeUso.executar(avaliadoDto);
        console.log(result, "res");

        res.status(200).json(result);
      } catch (error: any) {
        res.status(403).send(error.message);
      }
    };

    this.servidor.get("/listar/avaliacoes/recebidas", ...middleware, buscar);
  }
}
