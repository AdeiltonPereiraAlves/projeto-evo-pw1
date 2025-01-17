import Voluntario from "../model/voluntario/Voluntario";


export default interface VoluntarioDb{
    inserirUsuario(voluntario: Voluntario): any
    buscarPorEmail( email: string): any
}