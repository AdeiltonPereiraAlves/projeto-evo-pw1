import Tipo from "../../../@types/Tipo";
import Erros from '../../constants/Erros'
import Id from "../../shared/Id";
import Validador from "../../utils/Validador";

export default class Usuario {
  constructor(
    private _id:string,
    private _nome: string,
    private _email: string,
    private _tipo: Tipo,
    private _senha: string,
    private _imagem: string
  ) {
    
  }
  // get e set id

  getId(){
    return this._id;
  }

  setId(id: string){
    this._id = id
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
  
  // set e get senha
  setSenha(senha: string){
      const res = Validador.naoVazia(senha,Erros.SENHA_INVALIDA)
        if(!res){
          this._senha = senha
        }
        return res

  }
  getSenha(): string  {
    return this._senha;
  }
  
  //get e set email
  getEmail(): string {
    return this._email;
  }
  setEmail(email: string){
       if(!Validador.isEmailValido(email)){
          return Erros.EMAIL_INVALIDO
       }
       this._email = email
  }

  //set e get imagem
  getImagem(): string | undefined {
    return this._imagem;
  }

  setImagem(imagem:string) {
    const res = Validador.naoVazia(imagem,Erros.IMAGEM_INVALIDA)
    if(!res){
      this._imagem = imagem
    }
    return res
  }

  getTipo(): Tipo {
    return this._tipo;
  }
   setTipo(tipo: Tipo) {
  
      this._tipo = tipo;
    
    
  }


}
