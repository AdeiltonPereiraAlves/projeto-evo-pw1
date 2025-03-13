import { PrismaClient } from "@prisma/client";
import InscricaoType from "../../../@types/InscricaoType";
import prismaDb from "../../prismaDb/Prisma";
import Inscricao from "../../../core/model/inscricao/Inscricao";
import InscricaoTypeSaida from "../../../@types/InscricaoTypeSaida";

export default class InscricaoRepositorio {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaDb;
  }

  async registrar(inscricao: Inscricao): Promise<InscricaoTypeSaida> {
    try {
      const novaInscricao = await this.prisma.inscricao.create({
        data: {
          id: inscricao.getId(),
          voluntarioId: inscricao.getVoluntarioId(),
          vagaId: inscricao.getVagaId(),
          status: inscricao.getStatus(),
          ativo: inscricao.getAtivo(),

        },
      });
      return novaInscricao;
    } catch (error) {
      throw new Error("Erro ao registrar inscrição");
    }
  }

  async buscarPorId(id: string): Promise<any> {
    try {
      const inscricao = await this.prisma.inscricao.findUnique({
        where: { id },
        include: { voluntario: true, vaga: true },
      });
      return inscricao;
    } catch (error) {
      throw new Error("Erro ao buscar inscrição por ID");
    }
  }

  async atualizar(inscricao: any): Promise<InscricaoTypeSaida> {
    try {
      const inscricaoExistente = await this.prisma.inscricao.findUnique({
        where: { id: inscricao.inscricaoId },
      });
       console.log(inscricaoExistente,"inscricao existente")
      if (!inscricaoExistente) {
        throw new Error("Inscrição não encontrada");
      }
  
      const inscricaoAtualizada = await this.prisma.inscricao.update({
        where: { id: inscricao.inscricaoId },
        data: {
          ativo: inscricao.ativo
        },
      });
      return inscricaoAtualizada;
    } catch (error) {
      throw new Error("Erro ao atualizar inscrição");
    }
  }
  

  async excluir(id: string): Promise<boolean> {
    try {
      await this.prisma.inscricao.delete({ where: { id } });
      return true;
    } catch (error) {
      throw new Error("Erro ao excluir inscrição");
    }
  }
}