import CasoDeUso from "../../../@types/CasoDeUso";
import { Inscricao } from "../../model/inscricao/Inscricao";

export default class FazerInscricao implements CasoDeUso<Omit<Inscricao, 'id' | 'criadoEm'>, Inscricao> {
  async executar(inscricao: Omit<Inscricao, 'id' | 'criadoEm'>): Promise<Inscricao> {
    try {
      return await Inscricao.criar(inscricao);
    } catch (error) {
      throw new Error("Erro ao criar inscrição");
    }
  }
}
