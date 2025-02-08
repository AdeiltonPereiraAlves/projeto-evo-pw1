import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";
export type vagasOngDto = {
    id: string,
    ongId: string
}
export default class ListarVagasOng implements CasoDeUso<void, any> {
  constructor(private ongDb: OngRepositorioPort) {}
  async executar(): Promise<any> {
    try {
      const ongs = await this.ongDb.listarVagas();
      return ongs;
    } catch (error) {}
  }
}
