import { $Enums } from "@prisma/client";
import AreaAtuacao from "./AreaAtuacao";
import Tipo from "./Tipo";
import UsuarioType from "./UsuarioType";

export default interface OngSaidaType {
    id?: string;
    nome: string;
    email: string;
    tipo: $Enums.TipoUsuario;
    senha?: string | null;
    cnpj:string
    descricao: string
    visao: string
    missao :string
    areaAtuacao: $Enums.AreaAtuacao[]
    endereco: string
   
}