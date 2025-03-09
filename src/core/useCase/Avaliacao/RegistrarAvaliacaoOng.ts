import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoType from "../../../@types/AvaliacaoType";
import AvaliacaoRepositorio from "../../../adptadores/db/avaliacao/AvaliacaoRepositorio";

export default class RegistrarAvaliacaoOng implements CasoDeUso<AvaliacaoType, any> {
  constructor(private avaliacaoRepositorio: AvaliacaoRepositorio) {}

  async executar(dto: AvaliacaoType): Promise<any> {
    try {
      const novaAvaliacao = await this.avaliacaoRepositorio.registrar(dto);
      return novaAvaliacao;
    } catch (error) {
      console.log(error, "erro av")
      throw new Error("Erro ao registrar avaliação");
    }
  }
}