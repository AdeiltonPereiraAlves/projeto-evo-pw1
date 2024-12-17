import Tipo from "../../../@types/Tipo";

import Id from "../../shared/Id";

export default abstract class Usuario {
  private id: Id;

  constructor(
    private nome: string,
    private email: string,
    private tipo: Tipo,
    private senha?: string,
    private imagem?: string
  ) {
    this.id = Id.gerarId();
  }

  getId(): Id{
    return this.id;
  }

  getNome(): string {
    return this.nome;
  }

  getSenha(): string |undefined {
    return this.senha;
  }
  getEmail(): string {
    return this.email;
  }
  getImagem(): string | undefined {
    return this.imagem;
  }

  getTipo(): Tipo {
    return this.tipo;
  }
  alterarTipo(tipo: Tipo): void {
    this.tipo = tipo;
  }

}
