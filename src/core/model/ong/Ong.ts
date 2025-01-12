import Tipo from "../../../@types/Tipo";
import Usuario from "../usuario/Usuario";

export default class Ong extends Usuario{
    constructor(
        id: string,
        nome: string,
        email:string,
        tipo:Tipo,

  
        public descricao: string,
        public visao: string,
        private areaAtuacao: string[],
        private endereco: string,

        senha:string,
        imagem:string
    ){
      super(id, nome, email, tipo, senha, imagem )
    }

}