import Status from "../../../@types/Status";
import TipoTrabalho from "../../../@types/TipoTrabalho";

import Erros from "../../constants/Erros";
import Validador from "../../utils/Validador";

export default class Vaga {
  private id: string;
  private titulo: string;
  private descricao: string;
  private requisitos: string[];
  private quantidade:number;
  private status: Status;
  private duracao: string;
  private localizacao: string;
  private tipoTrabalho: TipoTrabalho;
  private latitude: number;
  private longitude: number;
  private ongId: string;

  constructor(
    id: string,
    titulo:string,

    descricao: string,
    requisitos: string[],
    quantidade:number,
    status: Status,
    duracao: string,
    localizacao: string,
    tipoTrabalho: TipoTrabalho,
    latitude: number,
    longitude: number,
    ongId:string
  ) {
    const erros = Validador.combinar(
        Validador.naoVazia(descricao, Erros.DESCRICAO_INVALIDA),
      Validador.arrayInvalido(requisitos, Erros.REQUISITOS_INVALIDOS),
      Validador.naoVazia(duracao, Erros.DURACAO_INVALIDA),
      Validador.naoVazia(localizacao, Erros.LOCALIZACAO_INVALIDA),
      Validador.validarCoordenadas(
        latitude,
        longitude,
        Erros.CORDENADAS_INVALIDAS
      )
    );
    if (erros) {
      throw new Error(erros.join(", "));
    }
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.requisitos = requisitos;
    this.quantidade =quantidade;
    this.status = status;
    this.duracao = duracao;
    this.localizacao = localizacao;
    this.tipoTrabalho = tipoTrabalho;
    this.latitude = latitude;
    this.longitude = longitude;
    this.ongId = ongId;
  }
  
  getId(){
    return this.id
  }
  getTitulo(){
    return this.titulo
  }
  getQuantidade(){
    return this.quantidade
  }
  getOngId(){
    return this.ongId
  }
  // get e set descricao
  setDescricao(descricao: string) {
    const erro = Validador.naoVazia(descricao, Erros.DESCRICAO_INVALIDA);
    if (erro) {
      throw new Error(erro);
    }
    this.descricao = descricao;
  }
  getDescricao(): string {
    return this.descricao;
  }

  // get e set requisitos
  setRequisitos(requisitos: string[]) {
    const erro = Validador.arrayInvalido(
      requisitos,
      Erros.REQUISITOS_INVALIDOS
    );
    if (erro) {
      throw new Error(erro);
    }
    this.requisitos = requisitos;
  }
  getRequisitos(): string[] {
    return this.requisitos;
  }

  // get e set status
  setStatus(status: Status) {
   
    this.status = status;
  }
  getStatus(): Status {
    return this.status;
  }

  // get e set duracao
  setDuracao(duracao: string) {
    const erro = Validador.naoVazia(duracao, Erros.DURACAO_INVALIDA);
    if (erro) {
      throw new Error(erro);
    }
    this.duracao = duracao;
  }
  getDuracao(): string {
    return this.duracao;
  }

  // get e set localizacao
  setLocalizacao(localizacao: string) {
    const erro = Validador.naoVazia(localizacao, Erros.LOCALIZACAO_INVALIDA);
    if (erro) {
      throw new Error(erro);
    }
    this.localizacao = localizacao;
  }
  getLocalizacao(): string {
    return this.localizacao;
  }

  // get e set tipoTrabalho
  setTipoTrabalho(tipoTrabalho: TipoTrabalho) {
 
    this.tipoTrabalho = tipoTrabalho;
  }
  getTipoTrabalho(): TipoTrabalho {
    return this.tipoTrabalho;
  }

  // get e set latitude
  setLatitude(latitude: number) {
    const erro = Validador.validarLatitude(latitude)
      ? null
      : Erros.LATITUDE_INVALIDA;
    if (erro) {
      throw new Error(erro);
    }
    this.latitude = latitude;
  }
  getLatitude(): number {
    return this.latitude;
  }

  // get e set longitude
  setLongitude(longitude: number) {
    const erro = Validador.validarLongitude(longitude)
      ? null
      : Erros.LONGITUDE_INVALIDA;
    if (erro) {
      throw new Error(erro);
    }
    this.longitude = longitude;
  }
  getLongitude(): number {
    return this.longitude;
  }
}
