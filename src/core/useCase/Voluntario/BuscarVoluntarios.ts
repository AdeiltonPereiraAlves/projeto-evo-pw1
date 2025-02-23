import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "./VoluntarioDb";

export default class buscarVoluntarios implements CasoDeUso<void,VoluntarioType[]> {
    constructor(private voluntarioDb: VoluntarioDb){}
     async executar(){
        const voluntarios = await this.voluntarioDb.buscarTodos()
        return voluntarios
    }
}