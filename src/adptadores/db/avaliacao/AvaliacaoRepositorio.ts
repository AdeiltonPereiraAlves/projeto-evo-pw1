import { PrismaClient } from "@prisma/client";
import AvaliacaoType from "../../../@types/AvaliacaoType";
import prismaDb from "../../prismaDb/Prisma";
import AvaliacaoRepositorioPort from "../../../core/useCase/Avaliacao/AvaliacaoRepositorioPort";
import Tipo from "../../../@types/Tipo";
import { atualizaAvaliacaoDto } from "../../../core/useCase/Avaliacao/AtualizarAvaliacao";

export default class AvaliacaoRepositorio implements AvaliacaoRepositorioPort {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaDb;
  }

  async registrar(avaliacao: AvaliacaoType): Promise<any> {
    try {
      console.log(avaliacao,"avaliacao")
      const novaAvaliacao = await this.prisma.avaliacao.create({
        data: {
          voluntarioId: avaliacao.voluntarioId,
          ongId: avaliacao.ongId,
          tipo: avaliacao.tipo,
          comentario: avaliacao.comentario,
          nota: avaliacao.nota,
        },
      });
      return novaAvaliacao;
    } catch (error) {
      console.log(error, "erro db")
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

  async atualizar(avaliacao: atualizaAvaliacaoDto): Promise<any> {
    try {
      const avaliacaoAtualizada = await this.prisma.avaliacao.update({
        where: { id: avaliacao.avaliacaoId },
        data: {
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

  async avaliacoesFeitasVoluntario(id:string, tipo:Tipo) {
    try {
      const listaAvaliaco = await this.prisma.avaliacao.findMany({ where: {voluntarioId:id ,tipo},
        include:{
          ong:true
        }
       });
      return listaAvaliaco ;
    } catch (error) {
      throw new Error("Erro ao listar avaliação");
    }
  }
  async avaliacoesFeitasOng(id:string, tipo:Tipo) {
    try {
      const listaAvaliaco = await this.prisma.avaliacao.findMany({ where: {ongId:id ,tipo},
        include:{
          voluntario:true
        }
       });
      return listaAvaliaco ;
    } catch (error) {
      throw new Error("Erro ao listar avaliação");
    }
  }
  async avaliacoesRecebidasVoluntario(id:string, tipo:Tipo) {
    try {
      const avaliacoesRecebidas = await this.prisma.avaliacao.findMany({
         where:{
          avaliadoId: id,
          tipo, // Só traz avaliações feitas por ONGs
         }
       });
      return  avaliacoesRecebidas;
    } catch (error) {
      throw new Error("Erro ao lista avaliação");
    }
  }
  async avaliacoesRecebidasOng(id:string, tipo:Tipo) {
    try {
      const avaliacoesRecebidas = await this.prisma.avaliacao.findMany({
         where:{
          ongId: id,
          tipo, // Só traz avaliações feitas por ONGs
         }
       });
      return  avaliacoesRecebidas;
    } catch (error) {
      throw new Error("Erro ao lista avaliação");
    }
  }

  
}