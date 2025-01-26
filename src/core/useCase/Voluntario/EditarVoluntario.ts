import CasoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import VoluntarioDb from "../../portas/VoluntarioDb";

export type editarVoluntarioDto = {
    id?: string,
    nome: string,
    email: string,
    habilidades: string[],
    interesses: string[],
    disponibilidade: Disponibilidade[],
    imagem: string 
}

export default class EditarVoluntario implements CasoDeUso<editarVoluntarioDto,any>{
    constructor(
        private voluntario:VoluntarioDb
    ) {

    }
    async executar(dto: editarVoluntarioDto){
       const resposta = await this.voluntario.editarVoluntario(dto)
       return resposta
    }
}