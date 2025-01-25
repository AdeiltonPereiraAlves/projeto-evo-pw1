import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "../../portas/VoluntarioDb";

export default class buscarVoluntarios implements CasoDeUso<void, any> {
    constructor(private voluntarioDb: VoluntarioDb){}
     async executar(){
        const voluntarios = await this.voluntarioDb.buscarVoluntarios()
        return voluntarios
    }
}