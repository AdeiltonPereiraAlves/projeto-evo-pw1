import CasoDeUso from "../../../@types/CasoDeUso";
import BuscarOngPorId from "./BuscarOngPorId";
import OngRepositorioPort from "./OngRepositorioPort";

export default class ExcluirOng implements CasoDeUso<string,boolean>{
    constructor(private ongDb: OngRepositorioPort){

    }
    async executar(id:string): Promise<boolean> {

        const buscarId = new BuscarOngPorId(this.ongDb)
        const ong = await buscarId.executar(id)
        if(!ong) throw new Error("Erro, ong nao existe")
            
        const resposta = await this.ongDb.excluir(id)

        return resposta;
        
    }

}