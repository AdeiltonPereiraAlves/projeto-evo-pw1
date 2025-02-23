import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "./VoluntarioDb";

export default class BuscarPorId implements CasoDeUso<string,any>{
    constructor(private voluntarioRepositorio: VoluntarioDb){}
    async executar(id: string): Promise<any> {
        try {
           const voluntarioExistente = await this.voluntarioRepositorio.buscarPorId(id)
           return voluntarioExistente
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}