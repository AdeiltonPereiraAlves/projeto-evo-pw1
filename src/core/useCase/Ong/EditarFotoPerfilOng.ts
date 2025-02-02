import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

import { fotoDto } from "../Voluntario/EditarFotoPerfil";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";

export default class EditarFotoPerfilOng implements CasoDeUso<fotoDto, void>{
    constructor(
        private ongDb: UsuarioRepo
    ){}
    async executar(dto: fotoDto) {
        const resposta = await this.ongDb.editarFoto(dto.id!,dto.imagem)
        return resposta
    }
    
}