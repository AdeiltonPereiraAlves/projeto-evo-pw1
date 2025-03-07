import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../model/voluntario/Voluntario";
import voluntarioRepositorio from "./VoluntarioRepositorioPort";

export default class BuscarPorId implements CasoDeUso<string,any>{
    constructor(private voluntarioRepositorio: voluntarioRepositorio){}
    async executar(id: string){
        try {
           const voluntarioExistente = await this.voluntarioRepositorio.buscarPorId(id)
           return voluntarioExistente
        } catch (error) {
            
            throw new Error("Erro ao buscar voluntario por id");
        }
    }

}