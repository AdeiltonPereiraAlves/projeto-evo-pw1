import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "./VoluntarioDb";
export type fotoDto = {
    imagem: string,
    id?:string
}
export default class EditarFotoPerfil implements CasoDeUso<fotoDto,VoluntarioType>{ 
    constructor(
        private VoluntarioDb: VoluntarioDb,
       
    ){}
    async executar(dto: fotoDto){
        const voluntarioAtual = await this.VoluntarioDb.editarFoto(dto.id!,dto.imagem,)
        return voluntarioAtual
    }
}