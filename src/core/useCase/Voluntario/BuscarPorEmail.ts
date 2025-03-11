import CasoDeUso from "../../../@types/CasoDeUso";
import VoluntarioType from "../../../@types/VoluntarioType";
import Voluntario from "../../model/voluntario/Voluntario";
import VoluntarioDb from "./VoluntarioRepositorioPort";

export default class BuscarPorEmail implements CasoDeUso<string,VoluntarioType| null>{
    constructor(
        private voluntarioDB: VoluntarioDb
    ){}
    async executar(email: string){
       const voluntario =await this.voluntarioDB.buscarPorEmail(email)
       console.log(voluntario, "usuario buscar")
       return voluntario
    }
    
}