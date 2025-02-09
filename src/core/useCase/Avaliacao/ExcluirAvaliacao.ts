import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";

export default class ExcluirAvaliacao implements CasoDeUso<string, boolean> {
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorio) {}

  async executar(id: string): Promise<boolean> {
    try {
      const resultado = await this.avaliacaoRepositorio.excluir(id);
      return resultado;
    } catch (error) {
      throw new Error("Erro ao excluir avaliação");
    }
  }
}