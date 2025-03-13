import { StatusInscricao } from "@prisma/client";
import Status from "../../../@types/Status";

export default class Inscricao {
  private id: string;
  private status: StatusInscricao;//alterar para StatusInscricao depois
  private  ativo: boolean;
  private vagaId: string;
  private voluntarioId: string;

  constructor(id: string,  status: StatusInscricao, ativo:boolean, vagaId: string,voluntarioId: string) {
    this.id = id;
    this.voluntarioId = voluntarioId;
    this.vagaId = vagaId;
    this.status = status;
    this.ativo = ativo;
   
    
  }

  getId() {
    return this.id;
  }

  getAtivo(){
    return this.ativo
  }

  getVoluntarioId() {
    return this.voluntarioId;
  }

  getVagaId() {
    return this.vagaId;
  }

  getStatus() {
    return this.status;
  }

  setStatus(status: StatusInscricao) {
    this.status = status;
   
  }
}