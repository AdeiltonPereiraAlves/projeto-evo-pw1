import Voluntario from "../model/voluntario/Voluntario";


export default interface VoluntarioDb{
    inserirUsuario(voluntario: Voluntario): any
    buscarPorEmail( email: string): any
    buscarVoluntarios():any
    buscarPorId(id: string): any
    editarFoto(novaImagem: string,id: string| undefined): any
    excluirVoluntario(id: string): any

}