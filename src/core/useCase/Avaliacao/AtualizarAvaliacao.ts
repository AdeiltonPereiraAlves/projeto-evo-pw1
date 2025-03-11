import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoType from "../../../@types/AvaliacaoType";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";

export type atualizaAvaliacaoDto = {
  avaliadorId: string;
  avaliacaoId: string;
  comentario: string;
  nota: number;
};

export default class AtualizarAvaliacao
  implements CasoDeUso<atualizaAvaliacaoDto, any>
{
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorio) {}

  async executar(dto: atualizaAvaliacaoDto): Promise<any> {
    try {
      const avaliacaoAtualizada = await this.avaliacaoRepositorio.atualizar(
        dto
      );
      return avaliacaoAtualizada;
    } catch (error) {
      throw new Error("Erro ao atualizar avaliação");
    }
  }
}
