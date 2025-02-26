import OngType from "../../../@types/OngType";
import Ong from "../../model/ong/Ong";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";

export default interface OngRepositorioPort {
    registrar(ong:OngType):any
    excluir(id:string):any
    atualizar(ong:any):any
    buscarTodos():any
    buscarVagasDeOng(id:string):any
    buscarPorEmail(email:string):any
    
    


   
}
 