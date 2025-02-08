import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "../../portas/VoluntarioDb";

export default class BuscarVoluntarioPorId implements CasoDeUso<any, any>{
    constructor(private voluntarioRepositorio: VoluntarioDb){}
    async executar(id: any): Promise<any> {
        try {
            const voluntario = await this.voluntarioRepositorio.buscarVoluntarioPorId(id)
            return voluntario
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}