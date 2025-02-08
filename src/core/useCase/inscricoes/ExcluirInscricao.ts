import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioDb from "../../portas/VoluntarioDb";
import ListarInscricoesVoluntario from "../Voluntario/ListarInscricoesVoluntario";
import InscricaoRepositorioPort from "./IncricoesRepositorioPort";

export type excluirInscricaoDto ={
    id:string,
    voluntarioId:string
}
export default class ExcluirIncricao implements CasoDeUso<excluirInscricaoDto, void>{
    constructor(
        private inscricaoRepositorio: InscricaoRepositorioPort,
    ){}
    async executar(dto:excluirInscricaoDto): Promise<void> {
        
        const resposta = await this.inscricaoRepositorio.excluir(dto)
        return resposta;
        
    }

}