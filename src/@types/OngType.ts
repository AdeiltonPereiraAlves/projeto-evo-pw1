import UsuarioType from "./UsuarioType";

export default interface OngType extends UsuarioType{
    cnpj:string
    descricao: string
    visao: string
    missao :string
    areaAtuacao: AreaAtuacao
    endereco: string
}