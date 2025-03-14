import CasoDeUso from "../../../@types/CasoDeUso";
import VagaRepositorioPort from "./VagaRepositorioPort";

export default class BuscarVagaPorId implements CasoDeUso<string,any>{
    constructor(private vagaRepositorio: VagaRepositorioPort){}
    async executar(id: string): Promise<any> {
        try {
           const vagaExistente = await this.vagaRepositorio.buscarPorId(id)
           return vagaExistente
        } catch (error) {
            console.log(error, "error")
            throw new Error("Erro ao busca vaga por id");
        }
    }

}