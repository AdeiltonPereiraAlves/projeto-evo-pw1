import CasoDeUso from "../../../@types/CasoDeUso";
import BuscarPorId from "./BuscarPorId";
import voluntarioRepositorio from "./VoluntarioRepositorioPort";

export default class ExcluirVoluntario implements CasoDeUso<string, boolean>{
    constructor(
        private voluntarioRepositorio: voluntarioRepositorio
    ){}
    async executar(id:string) {
        const buscarPorId = new BuscarPorId(this.voluntarioRepositorio)
        if(!buscarPorId) throw new Error("Voluntario não existe")

        const resposta = await this.voluntarioRepositorio.excluir(id)
        return resposta;
        
    }

}