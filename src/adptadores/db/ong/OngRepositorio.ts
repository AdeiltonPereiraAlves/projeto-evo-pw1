import path from "path";
import OngType from "../../../@types/OngType";
import prismaDb from "../../prismaDb/Prisma";
import UsuarioRepositorio from "../usuario/UsuarioRepositorio";
import fs from "fs/promises";
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import Erros from "../../../core/constants/Erros";
import UsuarioType from "../../../@types/UsuarioType";
import { mudarStatusVagaDto } from "../../../core/useCase/Ong/MudarStatusVaga";
// OngRepositorio.ts
export class OngRepositorio implements OngRepositorioPort {
  async buscarTodos() {
    try {
      const ong = await prismaDb.ong.findMany();
      return ong;
    } catch (error) {
      throw new Error("Erro no buscar ongs");
    }
  }
  async buscarPorId(id: string): Promise<any> {
    const ong = await prismaDb.ong.findUnique({
      where: { id },
    });
    return ong;
  }

  async atualizar(ong: any): Promise<any> {
    try {
      const usuarioAtualizado = await prismaDb.ong.update({
        where: { id: ong.id },
        data: {
          ...ong,
        },
      });
      return usuarioAtualizado;
    } catch (error) {
      console.error("Erro ao alterar  ong:", error);
    }
  }

  async excluir(id: string): Promise<boolean> {
    try {
      await prismaDb.ong.delete({
        where: { id },
      });

      // Excluir o usuário

      return true;
    } catch (error) {
      console.error("Erro aodeletar  ong:", error);
      return false;
    }
  }

  async registrar(ong: OngType): Promise<any> {
    try {
      const ongRegistrada = await prismaDb.ong.create({
        data: {
          ...ong,
        },
      });
      return ongRegistrada;
    } catch (error) {
      console.error("Erro ao cadastrar  ong:", error);

      throw new Error("Erro ao registrar ong");
    }
  }
  async buscarVagasDeOng(id: string) {
    try {
      const ongComVagas = await prismaDb.ong.findUnique({
        where: { id },
        include: {
          vagas: {
            include: {
              inscricoes: {
                select: {
                  id:true,
                  ativo: true,
                  status: true,
                  voluntario: true,
                },
              },
            },
          },
        },
      });
      return ongComVagas;
    } catch (error) {
      throw new Error("Erro ao ong com vagas");
    }
  }

  async buscarPorEmail(email: string): Promise<any> {
    console.log(email, "email");
    const ong = await prismaDb.ong.findUnique({
      where: { email },
    });

    console.log(ong, "ong");
    return ong;
  }

  async aprovarVoluntario(aprovacao: any) {
    try {
      console.log(aprovacao, "aprovacao");
      this.alterQuantidadeVaga(aprovacao)
      const res = await prismaDb.inscricao.updateMany({
        where: { vagaId: aprovacao.vagaId },

        data: {
          status: aprovacao.status,
        },
      });

      console.log(res, "res");
      return res;
    } catch (error) {
      console.log(error, "erro");
      throw new Error("Erro ao aprovar ");
    }
  }
  // alterar quantidade de vaga
  async alterQuantidadeVaga(alterarVaga: any) {
    try {
       await prismaDb.vaga.updateMany({
        where: { id: alterarVaga.vagaId },
        data: {
          quantidade: {
            decrement: alterarVaga.quantidade,
          },
        },
      });
     
    } catch (error) {
      console.log(error, "erro");
      throw new Error("Erro ao aprovar ");
    }
  }
  async listarVagaDeUmaOng(ong: any) {
    // talves nao precise desse metodo
    console.log(ong, "ong");
    try {
      const vagasDeUmaOng = await prismaDb.vaga.findUnique({
        where: {
          id: ong.vagaId,
          ongId: ong.id,
        },
      });
      return vagasDeUmaOng;
    } catch (error) {
      throw new Error("Erro ao retonar vagas ");
    }
  }
  async mudarStatusDaVaga(statusVaga: mudarStatusVagaDto) {
    try {
      const res = await prismaDb.vaga.updateMany({
        where: { id: statusVaga.vagaId },

        data: {
          status: statusVaga.status,
        },
      });
      console.log(res, "res");
      return res;
    } catch (error) {
      console.log(error, "erro");
      throw new Error("Erro ao aprovar ");
    }
  }
}
