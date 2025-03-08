import { StatusInscricao } from "@prisma/client";
import CasoDeUso from "../../../@types/CasoDeUso";
import Status from "../../../@types/Status";
import VagaRepositorioPort from "../vaga/VagaRepositorioPort";
import OngRepositorioPort from "./OngRepositorioPort";
import Vagatype from "../../../@types/VagaType";
export type aprovarDto = {
    
    status: StatusInscricao
    ongId: string,
    vagaId?: string
    quantidade?: any
}
export default class AprovarVoluntario implements CasoDeUso<aprovarDto,any>{
    constructor(private ongRepositorio: OngRepositorioPort){}
    async executar(dto: aprovarDto): Promise<any> {
        try {
            const vagaExistente:Vagatype = await this.ongRepositorio.listarVagaDeUmaOng({ongId:dto.ongId, vagaId:dto.vagaId})
            console.log(vagaExistente, "vagaex")
            if(!vagaExistente){
                throw new Error("Vaga na existe")
            }
            dto.vagaId = vagaExistente.id
            dto.status =  StatusInscricao.aprovado
            dto.quantidade = 1

            console.log(dto.status, "status")
            const aprovado = await this.ongRepositorio.aprovarVoluntario(dto)
            
            console.log(aprovado, "aprovado")
            return aprovado
        } catch (error) {
            
            throw new Error("Method not implemented. c");
        }
    }

}