import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import OngRepositorioPort from "./OngRepositorioPort";

export default class BuscarPorEmail implements CasoDeUso<string, any>{
    constructor(
        private usuarioDb: OngRepositorioPort
    ){}
    async executar(email: string): Promise<any> {
       const usuario =await this.usuarioDb.buscarPorEmail(email)

       return usuario
    }
    
}