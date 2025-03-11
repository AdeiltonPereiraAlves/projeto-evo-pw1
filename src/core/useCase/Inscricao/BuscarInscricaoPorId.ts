import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";

export default class BuscarInscricaoPorId implements CasoDeUso<string, any> {
  constructor(private inscricaoRepositorio: InscricaoRepositorio) {}

  async executar(id: string): Promise<any> {
    try {
      const inscricao = await this.inscricaoRepositorio.buscarPorId(id);
      return inscricao;
    } catch (error) {
      throw new Error("Erro ao buscar inscrição por ID");
    }
  }
}