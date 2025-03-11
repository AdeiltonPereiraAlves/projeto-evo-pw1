import VoluntarioRepositorioPort from "../../../core/useCase/Voluntario/VoluntarioRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";
import VoluntarioType from "../../../@types/VoluntarioType";

import { Inscricao } from "@prisma/client";
import Voluntario from "../../../core/model/voluntario/Voluntario";
import { editarVoluntarioDto } from "../../../core/useCase/Voluntario/EditarVoluntario";

export default class VoluntarioRepositorio
  implements VoluntarioRepositorioPort
{
  async buscarPorId(id: string): Promise<any> {
    const voluntario = await prismaDb.voluntario.findUnique({
      where: { id },
    });
    return voluntario;
  }
  async buscarTodos():Promise<VoluntarioType[]> {
    try {
      const voluntarios = await prismaDb.voluntario.findMany();
      return voluntarios as any;
    } catch (error) {
      throw new Error("Erro no buscar voluntarios");
    }
  }
  async registrar(voluntario: Voluntario): Promise<any> {
    console.log("chegou no banco");

    try {
      const voluntarioRegistrado = await prismaDb.voluntario.create({
        data: {
          id: voluntario.getId(),
          nome: voluntario.getNome(),
          email: voluntario.getEmail(),
          tipo: voluntario.getTipo(),
          contato: voluntario.getContato(),
          cpf: voluntario.getCpf(),
          habilidades: voluntario.getHabilidades(),
          interesses: voluntario.getInteresses(),
          disponibilidade: voluntario.getDisponibilidade(),
          senha: voluntario.getSenha(),
          imagem: voluntario.getImagem(),
        },
      });
      console.log(voluntarioRegistrado);
      return voluntarioRegistrado;
    } catch (error: any) {
      console.log(error);
      throw new Error("erro no banco.");
    }
  }

  // buscar por email

  async buscarPorEmail(email: string): Promise<VoluntarioType| null> {
    console.log(email, "email");
    const voluntario = await prismaDb.voluntario.findUnique({
      where: { email },
    });
    if (!voluntario) {
      return null;
    }
    console.log(voluntario, "voluntario");
    return voluntario as any;
  }

  //excluir voluntario
  async excluir(id: string): Promise<boolean> {
    try {

      await prismaDb.voluntario.delete({
        where: { id },
      });

      return true;
    } catch (error) {
      console.error("Erro aodeletar  voluntario:", error);
      throw new Error("Erro ao excluir Voluntario");
    }
  }

  async atualizar(voluntario:editarVoluntarioDto): Promise<Voluntario | any> {
    try {
      const voluntarioAtualizado = await prismaDb.voluntario.update({
        where: { id: voluntario.id },

        data: { ...voluntario },
      });
      return voluntarioAtualizado;
    } catch (error) {
      console.error("Erro ao alterar  voluntario:", error);
      throw new Error("erro ao atualizar voluntario");
    }
  }
  async editarFoto(id: string, novaImagem: string): Promise<boolean> {
    const voluntario = await prismaDb.voluntario.update({
      where: { id },
      data: { imagem: novaImagem },
    });

    return voluntario ? true : false;
  }
  async listarInscricoesVoluntario(
    id: string
  ): Promise<Partial<Inscricao> | null> {
    try {
      const inscricoes = await prismaDb.voluntario.findFirst({
        where: {
          id,
        },
        include: {
          inscricoes:{
            include:{
              vaga:true
            }
          }
        },
      });

      return inscricoes;
    } catch (error) {
      throw new Error("Erro ao listar inscricoes");
    }
  }

  async listarAvaliacoesVoluntario(id:string){
    try {
      const avaliacao = await prismaDb.voluntario.findFirst({
        where: {
          id,
        },
        include: {
         avaliacoes:true
          
        },
      });

      return avaliacao;
    } catch (error) {
      throw new Error("Erro ao listar avaliacoes");
    }
  }
}
