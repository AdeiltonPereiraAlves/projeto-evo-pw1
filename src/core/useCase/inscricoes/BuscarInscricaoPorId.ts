import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "../../portas/VoluntarioDb";
import InscricaoRepositorioPort from "./IncricoesRepositorioPort";

export default class BuscarIncricaoPorId implements CasoDeUso<any, any>{
    constructor(private inscricaoRepositorio: InscricaoRepositorioPort){}
    async executar(id: string): Promise<any> {
        try {
            const inscricao = await this.inscricaoRepositorio.buscarPorId(id)
            return inscricao
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}