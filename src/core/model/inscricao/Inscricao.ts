import Status from "../../../@types/Status";

export default class Inscricao {
  private id: string;
  private voluntarioId: string;
  private vagaId: string;
  private data: Date;
  private status: Status;//alterar para StatusInscricao depois
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: string, voluntarioId: string, vagaId: string, status: Status) {
    this.id = id;
    this.voluntarioId = voluntarioId;
    this.vagaId = vagaId;
    this.status = status;
    this.data = new Date();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  getId() {
    return this.id;
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

  setStatus(status: Status) {
    this.status = status;
    this.updatedAt = new Date();
  }
}