import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "./VagaRepositorio";

export default class ExcluirVaga implements CasoDeUso<string,any>{
    constructor(
        private vagaRepositorio:VagaRepositorioPort 
    ){}
    async executar(id: string): Promise<any> {
        try {
          const vagaExcluida = await  this.vagaRepositorio.excluir(id)
          return vagaExcluida
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }
}