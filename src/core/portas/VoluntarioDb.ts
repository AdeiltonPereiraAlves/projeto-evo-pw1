import Voluntario from "../model/voluntario/Voluntario";


export default interface UsuarioDb{
    inserirUsuario(voluntario: Voluntario): any
}