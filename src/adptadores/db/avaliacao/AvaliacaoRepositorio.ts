import { PrismaClient } from "@prisma/client";
import AvaliacaoType from "../../../@types/AvaliacaoType";
import prismaDb from "../../prismaDb/Prisma";

export default class AvaliacaoRepositorio {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaDb;
  }

  async registrar(avaliacao: AvaliacaoType): Promise<any> {
    try {
      const novaAvaliacao = await this.prisma.avaliacao.create({
        data: {
          voluntarioId: avaliacao.voluntarioId,
          ongId: avaliacao.ongId,
          frequecia: avaliacao.frequencia,
          tipo: avaliacao.tipo,
          comentario: avaliacao.comentario,
          nota: avaliacao.nota,
        },
      });
      return novaAvaliacao;
    } catch (error) {
      throw new Error("Erro ao registrar avaliação");
    }
  }

  async buscarPorId(id: string): Promise<any> {
    try {
      const avaliacao = await this.prisma.avaliacao.findUnique({
        where: { id },
        include: { voluntario: true, ong: true },
      });
      return avaliacao;
    } catch (error) {
      throw new Error("Erro ao buscar avaliação por ID");
    }
  }

  async atualizar(avaliacao: AvaliacaoType): Promise<any> {
    try {
      const avaliacaoAtualizada = await this.prisma.avaliacao.update({
        where: { id: avaliacao.id },
        data: {
          frequecia: avaliacao.frequencia,
          comentario: avaliacao.comentario,
          nota: avaliacao.nota,
        },
      });
      return avaliacaoAtualizada;
    } catch (error) {
      throw new Error("Erro ao atualizar avaliação");
    }
  }

  async excluir(id: string): Promise<boolean> {
    try {
      await this.prisma.avaliacao.delete({ where: { id } });
      return true;
    } catch (error) {
      throw new Error("Erro ao excluir avaliação");
    }
  }
}