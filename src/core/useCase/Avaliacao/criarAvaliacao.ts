import CasoDeUso from "../../../@types/CasoDeUso";
import { Avaliacao } from "../../model/avaliacao/Avaliacao";

export default class CriarAvaliacao implements CasoDeUso<Omit<Avaliacao, 'id' | 'criadoEm'>, Avaliacao> {
  async executar(avaliacao: Omit<Avaliacao, 'id' | 'criadoEm'>): Promise<Avaliacao> {
    try {
      return await Avaliacao.criar(avaliacao);
    } catch (error) {
      throw new Error("Erro ao criar avaliação");
    }
  }
}
