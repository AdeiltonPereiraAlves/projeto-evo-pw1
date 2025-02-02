import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "../../portas/VoluntarioDb";

export default class BuscarPorEmail implements CasoDeUso<string, any>{
    constructor(
        private usuarioDb: VoluntarioDb
    ){}
    async executar(email: string): Promise<any> {
       const usuario =await this.usuarioDb.buscarPorEmail(email)
       console.log(usuario, "usuario buscar")
       return usuario
    }
    
}