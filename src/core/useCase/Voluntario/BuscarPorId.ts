import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../model/voluntario/VoluntarioType";
import voluntarioRepositorio from "./VoluntarioRepositorio";

export default class BuscarPorId implements CasoDeUso<string,VoluntarioType>{
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