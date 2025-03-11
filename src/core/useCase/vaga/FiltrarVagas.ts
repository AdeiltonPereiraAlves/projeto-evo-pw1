import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "./VagaRepositorioPort";

export default class filtrarVagas implements CasoDeUso<string, any>{
    constructor(private vagaRepositorio: VagaRepositorioPort){}
    async executar(termo: string): Promise<any> {
        try {
            const resultado = await this.vagaRepositorio.filtrarVagas(termo)
            return resultado;
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}