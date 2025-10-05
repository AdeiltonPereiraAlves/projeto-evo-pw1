import prismaDb from "../../prismaDb/Prisma";
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import { mudarStatusVagaDto } from "../../../core/useCase/Ong/MudarStatusVaga";
import Ong from "../../../core/model/ong/Ong";
import Vagatype from "../../../@types/VagaType";
import OngType from "../../../@types/OngType";
import OngSaidaType from "../../../@types/OngSaidaType";
import { Vaga } from "@prisma/client";
import VagaSaidaType from "../../../@types/VagaSaidaType";
import { aprovarDto } from "../../../core/useCase/Ong/AprovarVoluntario";

export class OngRepositorio implements OngRepositorioPort {
  async buscarTodos():Promise<OngSaidaType[]> {
    try {
      const ong = await prismaDb.ong.findMany();
      return ong ;
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
      console.error("Erro ao deletar  ong:", error);
      return false;
    }
  }

  async registrar(ong: Ong): Promise<OngSaidaType> {
    try {
      const ongRegistrada = await prismaDb.ong.create({
        data: {
          id:ong.getId(),
          nome: ong.getNome(),
          email: ong.getEmail(),
          imagem: ong.getImagem()!,
          tipo: ong.getTipo(),
          missao: ong.getMissao(),
          cnpj: ong.getCnpj(),
          descricao: ong.getDescricao(),
          visao: ong.getVisao(),
          areaAtuacao: ong.getAreaAtuacao(),
          endereco: ong.getEndereco(),
          senha: ong.getSenha()

        },
      });
      return ongRegistrada ;
    } catch (error) {
      console.error("Erro ao cadastrar  ong:", error);

      throw new Error("Erro ao registrar ong");
    }
  }
  async buscarVagasDeOng(id: string):Promise<VagaSaidaType[]| null> {
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
      return ongComVagas as any ;
    } catch (error) {
      throw new Error("Erro ao buscar ong com vagas");
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

  async aprovarVoluntario(aprovacao: aprovarDto):Promise<boolean> {
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
      if(res){
        return true
      }
      return false;
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
      throw new Error("Erro ao alterar quantidade de vagas ");
    }
  }
  async listarVagaDeUmaOng(ong: mudarStatusVagaDto):Promise<VagaSaidaType | null> {
    console.log(ong, "ong");
    try {
      const vagasDeUmaOng = await prismaDb.vaga.findUnique({
        where: {
          id: ong.vagaId,
          ongId: ong.ongId,
        },
      });
      return vagasDeUmaOng;
    } catch (error) {
      throw new Error("Erro ao retonar vagas ");
    }
  }
  async mudarStatusDaVaga(statusVaga: mudarStatusVagaDto):Promise<boolean> {
    try {
      const res = await prismaDb.vaga.updateMany({
        where: { id: statusVaga.vagaId },

        data: {
          status: statusVaga.status,
        },
      });
      console.log(res, "res");
      if(res){
        return true
      }
      return false;
    } catch (error) {
      console.log(error, "erro");
      throw new Error("Erro ao aprovar ");
    }
  }
   async editarFoto(id: string, novaImagem: string): Promise<boolean> {
    const ong = await prismaDb.ong.update({
      where: { id },
      data: { imagem: novaImagem },
    });

    return ong ? true : false;
  }
  async listarAvalicaoesDeUmaOng(ong:any){
   
    try {
      const avaliacoesDeUmaOng = await prismaDb.avaliacao.findMany({
        where: {
          id: ong.avaliacaoId,
          ongId: ong.ongId,
        },
      });
      return avaliacoesDeUmaOng;
    } catch (error) {
      throw new Error("Erro ao retonar avaliacoes ");
    }
  }
}
