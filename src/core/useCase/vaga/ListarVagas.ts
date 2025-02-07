import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "../../model/vaga/VagaRepositorio";
import VagaType from "../../../@types/VagaType";
export default class ListarVagas implements CasoDeUso<void, VagaType[]> {
    constructor(
      private vagaRepositorio: VagaRepositorioPort
    ){}
    async  executar(): Promise<VagaType[]> {
        try {
            const vagas: VagaType[] = await this.vagaRepositorio.buscar()
            return vagas
        } catch (error) {
            
            throw new Error("Erros ao buscar vagas");
        }
    }

}