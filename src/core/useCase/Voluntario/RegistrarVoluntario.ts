import CasoDeUso from "../../../@types/CasoDeUso";
import casoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import VoluntarioDb from "../../portas/VoluntarioDb";
import Voluntario from "../../model/voluntario/Voluntario";
import Id from "../../shared/Id";
export type VoluntarioDto = {
    
                    
                    nome: string,
                    email: string,
                    tipo: Tipo,
                    habilidades: string[],
                    interesses: string[],
                    disponibilidade: Disponibilidade,
                    senha: string ,
                    imagem: string 
 }


export default class RegistrarVoluntario implements CasoDeUso<VoluntarioDto,Voluntario>{

    constructor(private voluntarioDb: VoluntarioDb){

    }
    async executar(dto: VoluntarioDto){
        
        const voluntario = new Voluntario(
            Id.gerarId(),
            dto.nome,
            dto.email,
            dto.tipo,
            dto.habilidades,
            dto.interesses,
            dto.disponibilidade,
            dto.senha,
            dto.imagem

        )
        console.log(voluntario, "voluntario")
        const newVoluntario = await this.voluntarioDb.inserirUsuario(voluntario)
        return newVoluntario

    }


}