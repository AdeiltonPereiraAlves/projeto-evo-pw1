import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

export default class BuscarOngs implements CasoDeUso<void, any>{
    constructor(
        private ongDb: OngRepositorioPort
    ){}
    async executar(): Promise<any> {
        const ongs = await this.ongDb.buscarOngs()
        return ongs
    }
} 