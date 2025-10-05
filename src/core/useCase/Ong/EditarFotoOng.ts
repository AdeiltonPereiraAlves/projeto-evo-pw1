import CasoDeUso from "../../../@types/CasoDeUso";
import { OngRepositorio } from "../../../adptadores/db/ong/OngRepositorio";
import voluntatioRepositorio from "./OngRepositorioPort";
export type fotoDto = {
    imagem: string,
    id?:string
}
export default class EditarFotoOng implements CasoDeUso<fotoDto,boolean>{ 
    constructor(
        private ongRepositorio: OngRepositorio,
       
    ){}
    async executar(dto: fotoDto){
        const fotoAtualizada = await this.ongRepositorio.editarFoto(dto.id!,dto.imagem,)
        return fotoAtualizada
    }
}