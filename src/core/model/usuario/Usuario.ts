import Tipo from "../../../@types/Tipo";
import Erros from '../../constants/Erros'
import Id from "../../shared/Id";
import Validador from "../../utils/Validador";

export default  class Usuario {
  
  constructor(
    private _id: Id,
    private _nome: string,
    private _email: string,
    private _tipo: Tipo,
    private _senha?: string,
    private _imagem?: string
  ) {
    // this.id = Id.gerarId();
   
  }
  // get e set id
  setId(id:string){
    if(!id){
      throw new Error(Erros.ID_INVALIDO)
    }
    this._id = id
  }
  getId(): Id{
    return this._id;
  }
  //get e set nome
  setNome(nome:string) {
     const res = Validador.naoVazia(nome,Erros.NOME_VAZIO)
     if(!res){
       this._nome = nome
       
     }
     return res
     
  }
  getNome(): string {
    return this._nome;
  }
  
  setSenha(senha: string){
      const res = Validador.naoVazia(senha,Erros.SENHA_INVALIDA)
        if(!res){
          this._senha = senha
        }
        return res

  }
  getSenha(): string |undefined {
    return this._senha;
  }
  getEmail(): string {
    return this._email;
  }
  getImagem(): string | undefined {
    return this._imagem;
  }

  getTipo(): Tipo {
    return this._tipo;
  }
   setTipo(tipo: Tipo): void {
    this._tipo = tipo;
  }


}
