import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class Inscricao {
  private _id: string;
  private _voluntarioId: string;
  private _vagaId: string;
  private _status: 'pendente' | 'aprovado' | 'rejeitado';
  private _criadoEm: Date;

  constructor(id: string, voluntarioId: string, vagaId: string, status: 'pendente' | 'aprovado' | 'rejeitado') {
    this._id = id; 
    this._voluntarioId = voluntarioId;
    this._vagaId = vagaId;
    this._status = status;
    this._criadoEm = new Date();
  }

  get id(): string {
    return this._id;
  }

  get voluntarioId(): string {
    return this._voluntarioId;
  }

  get vagaId(): string {
    return this._vagaId;
  }

  get status(): 'pendente' | 'aprovado' | 'rejeitado' {
    return this._status;
  }

  set status(novoStatus: 'pendente' | 'aprovado' | 'rejeitado') {
    this._status = novoStatus;
  }

  get criadoEm(): Date {
    return this._criadoEm;
  }

  static async criar(inscricao: Omit<Inscricao, 'id' | 'criadoEm'>) {
    return prisma.inscricao.create({ data: { ...inscricao, criadoEm: new Date() } });
  }
}
