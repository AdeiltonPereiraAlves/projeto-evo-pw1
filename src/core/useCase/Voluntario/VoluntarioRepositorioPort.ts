import { Inscricao } from "@prisma/client";
import VoluntarioType from "../../../@types/VoluntarioType";

import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import Voluntario from "../../model/voluntario/Voluntario";


export default interface VoluntarioRepositorioPort{
    registrar(voluntario: Voluntario): Promise< Voluntario>
    buscarPorId(id:string):Promise<VoluntarioType>
    editarFoto(novaImagem: string,id: string| undefined): Promise<boolean>
    excluir(id: string): Promise<boolean>
    atualizar(voluntario:any):any
    buscarPorEmail(email:string):any
    buscarTodos():any
    listarInscricoesVoluntario(id:string):Promise<Partial<Inscricao>| null>

}