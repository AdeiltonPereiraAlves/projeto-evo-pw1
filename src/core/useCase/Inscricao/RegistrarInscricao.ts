import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoType from "../../../@types/InscricaoType";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";

export default class RegistrarInscricao implements CasoDeUso<InscricaoType, any> {
  constructor(private inscricaoRepositorio: InscricaoRepositorio) {}

  async executar(dto: InscricaoType): Promise<any> {
    try {
      const novaInscricao = await this.inscricaoRepositorio.registrar(dto);
      return novaInscricao;
    } catch (error) {
      throw new Error("Erro ao registrar inscrição");
    }
  }
}