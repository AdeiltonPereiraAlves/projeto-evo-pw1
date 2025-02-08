import { excluirInscricaoDto } from "./ExcluirInscricao"

export default interface InscricaoRepositorioPort{
    registrar(inscricao:any):any
    listaInscricoesDeVoluntario(id:string):any
    excluir(dto:excluirInscricaoDto): any
    buscarPorId(id:string):any
}