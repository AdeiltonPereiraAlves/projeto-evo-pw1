import Tipo from "../../../@types/Tipo";

export default class Avaliacao {
  private id: string;
  private voluntarioId: string;
  private ongId: string;
  private data: Date;
  private comentario: string;
  private frequecia: String;
  private nota: number;
  private tipo: Tipo;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(id: string, voluntarioId: string, ongId: string, comentario: string, frequencia: string, nota: number, tipo: Tipo) {
    this.id = id;
    this.voluntarioId = voluntarioId;
    this.ongId = ongId;
    this.comentario = comentario;
    this.frequecia = frequencia;
    this.nota = nota;
    this.tipo = tipo;
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

  getOngId() {
    return this.ongId;
  }

  getComentario() {
    return this.comentario;
  }

  getFrequencia(){
    return this.frequecia;
  }

  getNota() {
    return this.nota;
  }

  setNota(nota: number) {
    this.nota = nota;
    this.updatedAt = new Date();
  }
}