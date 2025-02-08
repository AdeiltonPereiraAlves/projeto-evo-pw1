import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class Avaliacao {
  private _id: string;
  private _voluntarioId: string;
  private _ongId: string;
  private _nota: number;
  private _comentario?: string;
  private _criadoEm: Date;

  constructor( id: string, voluntarioId: string, ongId: string, nota: number, comentario?: string,) {
    this._id = id;
    this._voluntarioId = voluntarioId;
    this._ongId = ongId;
    this._nota = 0;
    this.nota = nota;
    this._comentario = comentario;
    this._criadoEm = new Date();
  }

  get id(): string {
    return this._id;
  }

  get voluntarioId(): string {
    return this._voluntarioId;
  }

  get ongId(): string {
    return this._ongId;
  }

  get nota(): number {
    return this._nota;
  }

  set nota(valor: number) {
    if (valor < 0 || valor > 5) {
      throw new Error('A nota deve estar entre 0 e 5');
    }
    this._nota = valor;
  }

  get comentario(): string | undefined {
    return this._comentario;
  }

  get criadoEm(): Date {
    return this._criadoEm;
  }

  static async criar(avaliacao: Omit<Avaliacao, 'id' | 'criadoEm'>) {
    return prisma.avaliacao.create({ data: { ...avaliacao, criadoEm: new Date() } });
  }
}
