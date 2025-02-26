import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "./VoluntarioRepositorio";

export default class ExcluirVoluntario implements CasoDeUso<string, void>{
    constructor(
        private voluntarioDb: VoluntarioDb
    ){}
    async executar(id:string): Promise<void> {
        
        const resposta = await this.voluntarioDb.excluir(id)
        return resposta;
        
    }

}