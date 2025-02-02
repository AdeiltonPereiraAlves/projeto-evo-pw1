import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "../../portas/VoluntarioDb";
export type fotoDto = {
    imagem: string,
    id?:string
}
export default class EditarFotoPerfil implements CasoDeUso<fotoDto,void>{ 
    constructor(
        private VoluntarioDb: UsuarioRepo,
       
    ){}
    async executar(dto: fotoDto){
        const voluntarioAtual = await this.VoluntarioDb.editarFoto(dto.id!,dto.imagem,)
        return voluntarioAtual
    }
}