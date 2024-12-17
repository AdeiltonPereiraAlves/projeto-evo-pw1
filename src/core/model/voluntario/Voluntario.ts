import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";

import Usuario from "../usuario/Usuario";

export default class Voluntario extends Usuario {
  constructor(
    
    nome: string,
    email: string,
    tipo: Tipo,
    senha: string,
    private habilidades: string[],
    private interesses: string[],
    private disponibilidade: Disponibilidade,
  
    imagem?: string | undefined
  ) {
    super( nome, email, tipo, senha, imagem);
  }
  getTipo(): Tipo {
    return this.getTipo();
  }
  getHabilidades(): string[] {
    return this.habilidades;
  }

  getInteresses(): string[] {
    return this.interesses;
  }

  getDisponibilidade(): Disponibilidade {
    return this.disponibilidade;
  }

}
