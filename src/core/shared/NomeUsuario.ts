import Validador from "../utils/Validador";

export default class NomeUsuario {
  readonly nome: string;
  constructor(nome: string) {
    this.nome = nome.trim();
    Validador.naoNulo(nome, Erros.NOME_NULO);
  }
}
