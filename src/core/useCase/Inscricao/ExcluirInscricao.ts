import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";

export default class ExcluirInscricao implements CasoDeUso<string, boolean> {
  constructor(private inscricaoRepositorio: InscricaoRepositorio) {}

  async executar(id: string): Promise<boolean> {
    try {
      const resultado = await this.inscricaoRepositorio.excluir(id);
      return resultado;
    } catch (error) {
      throw new Error("Erro ao excluir inscrição");
    }
  }
}