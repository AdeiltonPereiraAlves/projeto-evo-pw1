import { StatusInscricao } from "@prisma/client";
import CasoDeUso from "../../../@types/CasoDeUso";

import VagaRepositorioPort from "../vaga/VagaRepositorioPort";
import OngRepositorioPort from "./OngRepositorioPort";
import Status from "../../../@types/Status";
export type mudarStatusVagaDto = {
    
    status: Status
    ongId: string,
    vagaId?: string
}
export default class MudarStatusVaga implements CasoDeUso<mudarStatusVagaDto,any>{
    constructor(private ongRepositorio: OngRepositorioPort){}
    async executar(dto: mudarStatusVagaDto): Promise<any> {
        try {
            const vagaExistente = await this.ongRepositorio.listarVagaDeUmaOng({ongId:dto.ongId, vagaId:dto.vagaId})
            console.log(vagaExistente, "vagaex")
            if(!vagaExistente){
                throw new Error("Vaga nao existe")
            }
            dto.vagaId = vagaExistente.id
            dto.status =  Status.ENCERRADO
            const aprovado = await this.ongRepositorio.mudarStatusDaVaga(dto)
            console.log(aprovado, "aprovado")
            return aprovado
        } catch (error) {
            
            throw new Error("Erro ao mudar status da vaga");
        }
    }

}