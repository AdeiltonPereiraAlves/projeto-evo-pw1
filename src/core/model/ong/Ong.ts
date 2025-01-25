import AreaAtuacao from "../../../@types/AreaAtuacao";
import Tipo from "../../../@types/Tipo";
import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";
import Usuario from "../usuario/Usuario";

export default class Ong extends Usuario {
  private cnpj: string;
  private descricao: string;
  private missao: string;
  private visao: string;
  private areaAtuacao: AreaAtuacao[];
  private endereco: string;
  constructor(
    id: string,
    nome: string,
    email: string,
    tipo: Tipo,
    missao: string,
    cnpj: string,
    descricao: string,
    visao: string,
    areaAtuacao: AreaAtuacao[],
    endereco: string,

    senha: string,
    imagem: string
  ) {
    super(id, nome, email, tipo, senha, imagem);
    const erros = Validador.combinar(
      Validador.validarCnpj(cnpj, Erros.CNPJ_INVALIDO),
      Validador.naoVazia(missao, Erros.MISSAO_VAZIA),
      Validador.naoVazia(descricao, Erros.DESCRICAO_VAZIA),
      Validador.naoVazia(visao, Erros.VISAO_VAZIA),
      Validador.naoVazia(endereco, Erros.ENDERECO_VAZIO)
    );

    if (erros) {
      throw new Error(erros.join(", "));
    }
    this.cnpj = cnpj;
    this.missao = missao;
    this.descricao = descricao;
    this.visao = visao;
    this.areaAtuacao = areaAtuacao;
    this.endereco = endereco;
  }

  //get e set cnpj
  setCnpj(cnpj: string) {
    const res = Validador.validarCnpj(cnpj, Erros.CNPJ_INVALIDO);
    if (res) {
      return res;
    }
    this.cnpj = cnpj;
  }
  getCnpj() {
    return this.cnpj;
  }

  //get e set descricao
  getDescricao() {
    return this.descricao;
  }



  setDescricao(descricao: string) {
    const res = Validador.naoVazia(descricao, Erros.DESCRICAO_VAZIA);
    if (res) {
      return res;
    }
    this.descricao = descricao;
  }
  //get set missao
  getMissao() {
    return this.missao;
  }
  setMissao(missao: string) {
    const res = Validador.naoVazia(missao, Erros.MISSAO_VAZIA);
    if (res) {
      return res;
    }
    this.missao = missao;
  }

  //get e set visao
  getVisao() {
    return this.visao;
  }
  setVisao(visao: string) {
    const res = Validador.naoVazia(visao, Erros.VISAO_VAZIA);
    if (res) {
      return res;
    }
    this.visao = visao;
  }

  //get e set areaAtuacão
  getAreaAtuacao():AreaAtuacao[] {
    return this.areaAtuacao;
  }
  setAreaAtuacao(areaAtuacao: AreaAtuacao[]) {
    this.areaAtuacao = areaAtuacao;
  }

  //get e set endereco
  getEndereco() {
    
    return this.endereco;
  }

  setEndereco(endereco: string) {
    const res = Validador.naoVazia(endereco, Erros.ENDERECO_VAZIO);
    if (res) {
      return res;
    }
    this.endereco = endereco;
  }
}
