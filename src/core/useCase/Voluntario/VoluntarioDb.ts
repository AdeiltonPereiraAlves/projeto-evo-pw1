import VoluntarioType from "../../../@types/VoluntarioType";

import UsuarioRepo from "../../portas/usuario/UsuarioRepo";


export default interface VoluntarioDb {
    registrar(voluntario: VoluntarioType): Promise< VoluntarioType>
    // editarFoto(novaImagem: string,id: string| undefined): any
    excluir(id: string): any
    atualizar(voluntario:any):any
    buscarPorEmail(email:string):any
    buscarTodos():any

}