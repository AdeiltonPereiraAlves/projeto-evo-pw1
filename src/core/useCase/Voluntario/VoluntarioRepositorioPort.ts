import { Inscricao } from "@prisma/client";
import VoluntarioType from "../../../@types/VoluntarioType";
import Voluntario from "../../model/voluntario/Voluntario";
import { editarVoluntarioDto } from "./EditarVoluntario";


export default interface VoluntarioRepositorioPort{
    registrar(voluntario: Voluntario): Promise< Voluntario>
    buscarPorId(id:string):Promise<VoluntarioType>
    editarFoto(novaImagem: string,id: string| undefined): Promise<boolean>
    excluir(id: string): Promise<boolean>
    atualizar(voluntario:editarVoluntarioDto): Promise<Voluntario | any>
    buscarPorEmail(email:string):Promise<VoluntarioType| null>
    buscarTodos():Promise<VoluntarioType[]>
    listarInscricoesVoluntario(id:string):Promise<Partial<Inscricao>| null>

}