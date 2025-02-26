import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "./VoluntarioRepositorioPort";

export default class buscarVoluntarios implements CasoDeUso<void,VoluntarioType[]> {
    constructor(private voluntarioRepositorio: VoluntarioDb){}
     async executar(){
        const voluntarios = await this.voluntarioRepositorio.buscarTodos()
        return voluntarios
    }
}