import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoType from "../../../@types/InscricaoType";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";
import InscricaoRepositorioPort from "./InscricaoRepositorio";

export default class AtualizarInscricao implements CasoDeUso<InscricaoType, any> {
  constructor(private inscricaoRepositorio: InscricaoRepositorioPort) {}

  async executar(dto: InscricaoType): Promise<any> {
    if (!dto.id || !dto.status) {
      throw new Error("ID e status são obrigatórios para atualizar a inscrição");
    }
  
    try {
      const inscricaoAtualizada = await this.inscricaoRepositorio.atualizar(dto);
      return inscricaoAtualizada;
    } catch (error) {
      throw new Error("Erro ao atualizar inscrição");
    }
  }
}