import Ong from "../../model/ong/Ong";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";

export default interface OngRepositorioPort extends UsuarioRepo{
    registrar(ong:Ong):any
    deletar(id:string):any
   
}
 