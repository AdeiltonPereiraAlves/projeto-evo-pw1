import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import VoluntarioDb from "./VoluntarioRepositorio";

export default class BuscarPorEmail implements CasoDeUso<string,VoluntarioType>{
    constructor(
        private voluntarioDB: VoluntarioDb
    ){}
    async executar(email: string){
       const voluntario =await this.voluntarioDB.buscarPorEmail(email)
       console.log(voluntario, "usuario buscar")
       return voluntario
    }
    
}