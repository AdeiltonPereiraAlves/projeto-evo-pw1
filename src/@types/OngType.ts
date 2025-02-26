import AreaAtuacao from "./AreaAtuacao";
import Tipo from "./Tipo";
import UsuarioType from "./UsuarioType";

export default interface OngType {
    id?: string;
    nome: string;
    email: string;
    tipo: Tipo;
    senha?: string;
    cnpj:string
    descricao: string
    visao: string
    missao :string
    areaAtuacao: AreaAtuacao[]
    endereco: string
}