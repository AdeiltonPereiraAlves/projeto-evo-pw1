import Voluntario from "../model/voluntario/Voluntario";
import UsuarioRepo from "./usuario/UsuarioRepo";


export default interface VoluntarioDb extends UsuarioRepo{
    registrar(voluntario: Voluntario): any
    editarFoto(novaImagem: string,id: string| undefined): any
    excluir(id: string): any
    atualizar(voluntario:any):any

}