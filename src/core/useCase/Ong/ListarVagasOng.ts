import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

export default class ListarVagasOng implements CasoDeUso<string, any> {
  constructor(private ongDb: OngRepositorioPort) {}
  async executar(id:string): Promise<any> {
    try {
      const vagasDeUmaOng = await this.ongDb.buscarVagasDeOng(id!);
      return vagasDeUmaOng
    } catch (error) {
       throw new Error("Erro ao lista vagas de uma ong")
    }
  }
}
