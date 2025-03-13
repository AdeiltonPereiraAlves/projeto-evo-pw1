import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

export default class Voluntario {
  id: string;
  private nome: string;
  private email: string;
  private senha?: string;
  private imagem: string;
  private tipo: Tipo;
  private contato: string;
  private cpf: string;
  private _interesses: string[];
  private _habilidades: string[];
  private _disponibilidade: Disponibilidade[];
  constructor(
    id: string,
    nome: string,
    email: string,
    imagem: string,
    tipo: Tipo,
    contato: string,
    cpf:string,
    habilidades: string[],
    interesses: string[],
    disponibilidade: Disponibilidade[],
    senha?: string,
  ) {
    const erros = Validador.combinar(
      Validador.naoVazia(nome, Erros.NOME_VAZIO),
      Validador.naoVazia(email, Erros.EMAIL_INVALIDO),
      Validador.naoVazia(senha, Erros.SENHA_INVALIDA),
      Validador.naoVazia(imagem, Erros.IMAGEM_INVALIDA),
      Validador.arrayInvalido(habilidades, Erros.HABILIDADES_INVALIDAS),
      Validador.arrayInvalido(interesses, Erros.INTERESSES_INVALIDOS)
    );

    if (erros) {
      throw new Error(erros.join(", "));
    }
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.tipo = tipo;
    this.contato = contato;
    this.cpf = cpf;
    this._habilidades = habilidades;
    this._interesses = interesses;
    this._disponibilidade = disponibilidade;
    this.senha = senha;
    this.imagem = imagem;
  }
  getId(){
    return this.id;
  }
  getNome(): string {
    return this.nome;
  }
  getSenha(): string | undefined  {
    return this.senha;
  }
  getEmail(): string {
    return this.email;
  }
  getImagem(): string  {
    return this.imagem;
  }
  getTipo(): Tipo {
    return this.tipo;
  }
  getContato(){
    return this.contato
  }
  getCpf(){
    return this.cpf
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
  setDisponibilidade(disponibilidades: Disponibilidade[]) {
    this._disponibilidade = disponibilidades;
  }
  getDisponibilidade() {
    return this._disponibilidade;
  }
}
