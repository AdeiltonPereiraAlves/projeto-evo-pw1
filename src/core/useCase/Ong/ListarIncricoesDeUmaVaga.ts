import { exec } from "child_process";
import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorioPort from "../Inscricao/InscricaoRepositorio";
import OngRepositorioPort from "./OngRepositorioPort";

export default class ListarIncricoesDeUmaVaga implements CasoDeUso<string, any> {
    constructor(private ongRepositorio: OngRepositorioPort) {}
    async executar(vagaId: string){

            try {
                // const buscarId = new BuscarPorId(this.voluntarioRepositorio)
                const incricoes = await this.ongRepositorio.buscarInscricoesVagaOng(vagaId)
                return incricoes
            } catch (error) {
                throw new Error("Erro ao buscar inscricoes da vaga")
            }
        }
    
}