import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "./VagaRepositorioPort";
import VagaType from "../../../@types/VagaType";
export default class ListarVagas implements CasoDeUso<void, VagaType[]| null> {
    constructor(
      private vagaRepositorio: VagaRepositorioPort
    ){}
    async  executar() {
        try {
            const vagas: VagaType[]| null = await this.vagaRepositorio.buscar()
            return vagas
        } catch (error) {
            
            throw new Error("Erros ao buscar vagas");
        }
    }

}