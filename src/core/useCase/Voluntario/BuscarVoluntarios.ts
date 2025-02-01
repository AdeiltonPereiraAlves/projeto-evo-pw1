import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "../../portas/VoluntarioDb";

export default class buscarVoluntarios implements CasoDeUso<void, any> {
    constructor(private voluntarioDb: UsuarioRepo){}
     async executar(){
        const voluntarios = await this.voluntarioDb.buscarTodos()
        return voluntarios
    }
}