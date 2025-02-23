import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";


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