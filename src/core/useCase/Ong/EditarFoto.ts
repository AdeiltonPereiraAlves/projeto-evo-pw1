import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

import { fotoDto } from "../Voluntario/EditarFotoPerfil";

export default class EditarFotoPerfilOng implements CasoDeUso<fotoDto, void>{
    constructor(
        private ongDb: OngRepositorioPort
    ){}
    async executar(dto: fotoDto) {
        const resposta = await this.ongDb.editarFoto(dto.imagem, dto.id!)
        return resposta
    }
    
}