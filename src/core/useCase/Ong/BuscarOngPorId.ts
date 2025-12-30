import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

export default class BuscarOngPorId implements CasoDeUso<string,any>{
    constructor(private ongRepositorio: OngRepositorioPort){}
    async executar(id: string): Promise<any> {
        try {
            const ong = await this.ongRepositorio.buscarPorId(id)
            ong.senha = undefined;
            return ong;
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}