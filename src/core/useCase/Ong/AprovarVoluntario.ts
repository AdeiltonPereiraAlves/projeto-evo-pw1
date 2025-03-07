import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "../vaga/VagaRepositorioPort";
import OngRepositorioPort from "./OngRepositorioPort";
export type aprovarDto = {
    
    aprovado: string
    ongId: string,
    vagaId?: string
}
export default class AprovarVoluntario implements CasoDeUso<aprovarDto,any>{
    constructor(private ongRepositorio: OngRepositorioPort){}
    async executar(dto: aprovarDto): Promise<any> {
        try {
            const vagaExistente = await this.ongRepositorio.listarVagaDeUmaOng({ongId:dto.ongId, vagaId:dto.vagaId})
            console.log(vagaExistente, "vagaex")
            if(!vagaExistente){
                throw new Error("Vaga na existe")
            }
            dto.vagaId = vagaExistente.id
            const aprovado = await this.ongRepositorio.aprovarVoluntario(dto)
            console.log(aprovado, "aprovado")
            return aprovado
        } catch (error) {
            
            throw new Error("Method not implemented. c");
        }
    }

}