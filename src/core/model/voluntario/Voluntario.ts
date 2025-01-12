import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";

import Usuario from "../usuario/Usuario";

export default class Voluntario extends Usuario {
  constructor(
    id: string,
    nome: string,
    email: string,
    tipo: Tipo,
    private habilidades: string[],
    private interesses: string[],
    private disponibilidade: Disponibilidade,
    senha?: string | undefined,
    imagem?: string | undefined
  ) {
    super(id, nome, email, tipo, senha, imagem);
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
