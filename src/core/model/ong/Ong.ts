import Tipo from "../../../@types/Tipo";
import Usuario from "../usuario/Usuario";

export default class Ong extends Usuario{
    constructor(
        id: string,
        nome: string,
        email:string,
        tipo:Tipo,
        private missao: string,
        private cnpj: string,
        private descricao: string,
        private visao: string,
        private areaAtuacao: string[],
        private endereco: string,

        senha:string,
        imagem:string
    ){
      super(id, nome, email, tipo, senha, imagem )
    }
    
    //get e set cnpj
    setCnpj(cnpj: string){
       
    }
    getCnpj(){
      return this.cnpj
    }

    //get e set descricao
    getDescricao(){
      return this.descricao
    }
    setDescricao(descricao: string){

    }
    //get set missao
    getMissao(){
      return this.missao
    }
    setMissao(missao:string){
       this.missao = missao
    }


    //get e set visao
    getVisao(){
      return this.visao

    }
    setVisao(visao: string){

    }

    //get e set areaAtuacão
    getAreaAtuacao(){
      return this.areaAtuacao
    }
    setAreaAtuacao(areaAtuacao: AreaAtuacao){
        
    }

    //get e set endereco
    getEndereco(){
      return this.endereco
    }

    setEndereco(endereco:string){
      
    }



}