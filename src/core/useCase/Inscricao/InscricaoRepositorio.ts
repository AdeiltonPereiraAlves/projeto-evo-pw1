import InscricaoType from "../../../@types/InscricaoType";

export default interface InscricaoRepositorio{
    registrar(inscricacao:any):Promise<InscricaoType>
}