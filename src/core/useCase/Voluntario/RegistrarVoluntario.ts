import VoluntarioDb from "../../../portas/VoluntarioDb";
import Voluntario from "../../model/voluntario/Voluntario";
import Id from "../../shared/Id";

export default class RegistrarVoluntario{

    constructor(private voluntarioDb: VoluntarioDb){

    }
    async executar(voluntario: Voluntario){
        
        
        const newVoluntario = await this.voluntarioDb.inserirUsuario(voluntario)


    }


}