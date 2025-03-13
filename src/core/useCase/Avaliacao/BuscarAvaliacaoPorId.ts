import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";
import AvaliacaoRepositorioPort from "./AvaliacaoRepositorioPort";

export default class BuscarAvaliacaoPorId implements CasoDeUso<string, any> {
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorioPort) {}

  async executar(id: string): Promise<any> {
    try {
      const avaliacao = await this.avaliacaoRepositorio.buscarPorId(id);
      return avaliacao;
    } catch (error) {
      throw new Error("Erro ao buscar avaliação por ID");
    }
  }
}