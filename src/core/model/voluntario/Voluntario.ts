import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

import Usuario from "../usuario/Usuario";

export default class Voluntario extends Usuario {
  private _habilidades: string[]
  private _interesses: string[]
  private _disponibilidade: Disponibilidade
  constructor(
    id: string,
    nome: string,
    email: string,
    tipo: Tipo,
    habilidades: string[],
    interesses: string[],
    disponibilidade: Disponibilidade,
    senha: string ,
    imagem: string 
  ) {
    super(id, nome, email, tipo, senha, imagem);
    const erros = Validador.combinar(
      Validador.arrayInvalido(habilidades, Erros.HABILIDADES_INVALIDAS),
      Validador.arrayInvalido(interesses, Erros.INTERESSES_INVALIDOS),
      
      
    );

    if (erros) {
      throw new Error(erros.join(", "));
    }
    
    this._habilidades = habilidades ;
    this._interesses = interesses;
    this._disponibilidade = disponibilidade;
   
  }

  //get e set habilidades
  setHabilidades(habilidades: string[]) {
    const res = Validador.arrayInvalido(
      habilidades,
      Erros.HABILIDADES_INVALIDAS
    );
    console.log(res);
    if (res) {
      return res;
    }
    this._habilidades = habilidades;
  }
  getHabilidades(): string[] {
    return this._habilidades;
  }

  //get e set interesses
  setInteresses(interesses: string[]) {
    const res = Validador.arrayInvalido(interesses, Erros.INTERESSES_INVALIDOS);
    console.log(res);
    if (res) {
      return res;
    }
    this._interesses = interesses;
  }
  getInteresses(): string[] {
    return this._interesses;
  }

  //get e set disponibilidade
  setDisponibilidade(disponibilidades: Disponibilidade) {
    this._disponibilidade = disponibilidades;
  }
  getDisponibilidade() {
    return this._disponibilidade;
  }
}
