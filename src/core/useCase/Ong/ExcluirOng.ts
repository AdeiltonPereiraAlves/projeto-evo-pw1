import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";

export default class ExcluirOng implements CasoDeUso<string,boolean>{
    constructor(private ongDb: OngRepositorioPort){

    }
    async executar(id:string): Promise<boolean> {
        const resposta = await this.ongDb.excluir(id)

        return resposta;
        
    }

}