import Voluntario from "../core/model/voluntario/Voluntario";


export default interface UsuarioDb{
    inserirUsuario(voluntario: Voluntario): any
}