import Ong from "../../model/ong/Ong";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";

export default interface OngRepositorioPort extends UsuarioRepo{
    registrar(ong:Ong):any
    excluir(id:string):any
    atualizar(voluntario:any):any
    buscarTodos():any
    buscarVagasDeOng(id:string):any
    aprovarVoluntario(aprovacao:any):any
    listarVagaDeUmaOng(ong:any):any
}
 