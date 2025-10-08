import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";
 type statusDto ={
    vagaId:string,
    voluntarioId:string
}
export default class BuscarStatus implements CasoDeUso<any, any> {
  constructor(private inscricaoRepositorio: InscricaoRepositorio) {}

  async executar(dto: statusDto): Promise<any> {
    try {
      const inscricao = await this.inscricaoRepositorio.buscarStatus(dto.vagaId, dto.voluntarioId);
      return inscricao;
    } catch (error) {
      throw new Error("Erro ao buscar inscrição por ID");
    }
  }
}