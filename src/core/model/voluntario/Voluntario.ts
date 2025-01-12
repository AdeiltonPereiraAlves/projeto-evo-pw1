import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

import Usuario from "../usuario/Usuario";

export default class Voluntario extends Usuario {
  constructor(
    id: string,
    nome: string,
    email: string,
    tipo: Tipo,
    private _habilidades: string[],
    private _interesses: string[],
    private _disponibilidade: Disponibilidade,
    senha?: string | undefined,
    imagem?: string | undefined
  ) {
    super(id, nome, email, tipo, senha, imagem);
  }

  
  setHabilidades(habilidades: string[]){
    const res = Validador.arrayInvalido(habilidades, Erros.ARRAY_INVALIDO)
    console.log(res)
     if(res){
         return res;
     }
     
     this._habilidades = habilidades
  }
  getHabilidades(): string[] {
    return this._habilidades;
  }

  getInteresses(): string[] {
    return this._interesses;
  }

  getDisponibilidade(): Disponibilidade {
    return this._disponibilidade;
  }
}
