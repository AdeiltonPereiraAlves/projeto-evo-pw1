import Disponibilidade from "./Disponibilidade";
import UsuarioType from "./UsuarioType";

export default interface VoluntarioType extends UsuarioType{
    habilidades: string[]
    interesses:string []
    disponibilidade:Disponibilidade[]
}