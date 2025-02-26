import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import voluntatioRepositorio from "./VoluntarioRepositorio";
export type fotoDto = {
    imagem: string,
    id?:string
}
export default class EditarFotoPerfil implements CasoDeUso<fotoDto,boolean>{ 
    constructor(
        private voluntarioRepositorio: voluntatioRepositorio,
       
    ){}
    async executar(dto: fotoDto){
        const fotoAtualizada = await this.voluntarioRepositorio.editarFoto(dto.id!,dto.imagem,)
        return fotoAtualizada
    }
}