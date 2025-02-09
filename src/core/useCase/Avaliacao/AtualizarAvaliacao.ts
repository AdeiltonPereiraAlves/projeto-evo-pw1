import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoType from "../../../@types/AvaliacaoType";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";

export default class AtualizarAvaliacao implements CasoDeUso<AvaliacaoType, any> {
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorio) {}

  async executar(dto: AvaliacaoType): Promise<any> {
    try {
      const avaliacaoAtualizada = await this.avaliacaoRepositorio.atualizar(dto);
      return avaliacaoAtualizada;
    } catch (error) {
      throw new Error("Erro ao atualizar avaliação");
    }
  }
}