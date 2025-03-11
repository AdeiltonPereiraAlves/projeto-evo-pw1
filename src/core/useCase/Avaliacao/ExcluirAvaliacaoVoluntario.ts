import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";
import AvaliacaoRepositorioPort from "./AvaliacaoRepositorioPort";
export type excluirAvaliacaoDto = {
    avaliacaoId:string
    voluntarioId: string
}
export default class ExcluirAvaliacaoVoluntario implements CasoDeUso<excluirAvaliacaoDto, boolean> {
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorioPort) {}

  async executar(dto: excluirAvaliacaoDto): Promise<boolean> {
    try {
      const resultado = await this.avaliacaoRepositorio.excluir(dto.avaliacaoId);
      return resultado;
    } catch (error) {
      throw new Error("Erro ao excluir avaliação do voluntairo");
    }
  }
}