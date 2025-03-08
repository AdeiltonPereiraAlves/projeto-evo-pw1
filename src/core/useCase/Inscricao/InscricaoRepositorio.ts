import InscricaoType from "../../../@types/InscricaoType";

export default interface InscricaoRepositorio{
    registrar(inscricacao:any):Promise<InscricaoType>
    buscarPorId(id:string): any
    atualizar(inscricacao: InscricaoType):any
    excluir(id:string):any
}