import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "../../portas/VoluntarioDb";
export type fotoDto = {
    imagem: string,
    id?:string
}
export default class EditarFotoPerfil implements CasoDeUso<fotoDto,void>{ 
    constructor(
        private VoluntarioDb: VoluntarioDb,
       
    ){}
    async executar(dto: fotoDto){
        const voluntarioAtual = await this.VoluntarioDb.editarFoto(dto.imagem,dto.id)
        return voluntarioAtual
    }
}