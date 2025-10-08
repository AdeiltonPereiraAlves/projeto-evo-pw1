import InscricaoType from "../../../@types/InscricaoType";
import InscricaoTypeSaida from "../../../@types/InscricaoTypeSaida";
import Inscricao from "../../model/inscricao/Inscricao";

export default interface InscricaoRepositorioPort{
    registrar(inscricacao:Inscricao):Promise<InscricaoTypeSaida>
    buscarPorId(id:string):Promise<any>
    atualizar(inscricacao: InscricaoType):any
    excluir(id:string):Promise<boolean>
    buscarStatus(vagaId:string, voluntarioId:string):Promise<any>
}