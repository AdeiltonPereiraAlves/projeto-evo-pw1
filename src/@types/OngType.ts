import UsuarioType from "./UsuarioType";

export default interface OngType extends UsuarioType{
    descricao: string
    visao: string
    areaAtuacao: string[]
    endereco: string
}