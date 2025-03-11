import Disponibilidade from "./Disponibilidade";
import Tipo from "./Tipo";
import UsuarioType from "./UsuarioType";

export default interface VoluntarioType{
    id?: string;
    nome: string;
    email: string;
    tipo: Tipo;
    contato: string;
    cpf:string;
    senha?: string;
    imagem: string;
    habilidades: string[]
    interesses:string []
    disponibilidade:Disponibilidade[]
}