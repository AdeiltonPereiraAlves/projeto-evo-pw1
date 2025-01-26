import { log } from "console";
import Usuario from "../../../core/model/usuario/Usuario";
import Voluntario from "../../../core/model/voluntario/Voluntario";
import VoluntarioDb from "../../../core/portas/VoluntarioDb";
import prismaDb from "../../prismaDb/Prisma";
import UsuarioType from "../../../@types/UsuarioType";
import VoluntarioType from "../../../@types/VoluntarioType";
import imagemUpload from "../../middleware/ImagemUpload";
import path from "path";
import fs from 'fs/promises';

export default class VoluntarioRepositorio implements VoluntarioDb {
  constructor() {}
  async buscarVoluntarios() {
    try {
      const voluntarios = await prismaDb.voluntario.findMany({
        include: {
          usuario: {
            select: {
              nome: true,
              email: true,
              tipo: true,
              imagem: true,
            },
          },
        },
      });
      return voluntarios;
    } catch (error) {
      throw new Error("Erro no buscar voluntarios");
    }
  }
  async inserirUsuario(voluntario: Voluntario): Promise<any> {
    console.log("chegou no banco");

    console.log(voluntario.getImagem(), "Imagem no banco");
    try {
      const voluntarioRegistrado = await prismaDb.voluntario.create({
        data: {
          habilidades: voluntario.getHabilidades(),
          interesses: voluntario.getInteresses(),
          disponibilidade: voluntario.getDisponibilidade(),
          usuario: {
            create: {
              id: voluntario.getId(),
              nome: voluntario.getNome(),
              email: voluntario.getEmail(),
              senha: voluntario.getSenha(),
              imagem: voluntario.getImagem(),
              tipo: voluntario.getTipo(),
            },
          },
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
  async buscarPorEmail(email: string) {

    console.log(email, "email no db")
    try {
      const usuario = await prismaDb.usuario.findFirst({
        where: { email },
        include: {
          voluntario: true,
        },
      });
      console.log(usuario,"usuario db")
      if (!usuario) {
        return { error: "Usuário não encontrado" };
      }

      return usuario;
    } catch (error) {
      console.error("Erro ao buscar usuário pelo email:", error);
      return { error: "Erro ao buscar usuário" };
    }
  }
  async buscarPorId(id: string) {
    try {
      if (!id) {
        throw new Error("ID não foi fornecido");
      }
      const voluntario = await prismaDb.usuario.findUnique({
        where: { id },
        include: { voluntario: true },
      });

      if (!voluntario) {
        return { error: "Id nao encontrado" };
      }
      return voluntario;
    } catch (error) {
      console.error("Erro ao buscar voluntario pelo id:", error);
      return { error: "Erro ao buscar voluntario" };
    }
  }
  async editarFoto(novaImagem: string, id: string) {
    try {
      const voluntario = await this.buscarPorId(id);
      if ("error" in voluntario) {
        throw new Error(voluntario.error);
      }

      const voluntarioFotoAtualizada = await prismaDb.usuario.update({
        where: {
          id: voluntario.id,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          imagem: true,
          tipo: true,
        },
        data: { imagem: novaImagem },
      });

      return voluntarioFotoAtualizada;
    } catch (error) {
      console.error("Erro ao editar foto do voluntario:", error);
      return { error: "Erro ao editar voluntario" };
    }
  }
  //excluir voluntario
  async excluirVoluntario(id: string) {
    try {
      const  resposta = await this.buscarPorId(id);
      let usuarioId = ""
      let idV =""
      if (!resposta) {
       throw new Error("Voluntario Nao encontrado")
      }
      console.log(resposta, "resposta")
      if ('voluntario' in resposta && resposta.voluntario !== null) {
        usuarioId = resposta.voluntario.usuarioId;
        idV = resposta.voluntario.id

        console.log(idV, "idv")
        const imagePath = path.resolve(`public/images/voluntarios/${resposta.imagem}`);
        await fs.unlink(imagePath).catch(() => console.log('Imagem já foi excluída.'));
        console.log('ID do usuário:', usuarioId);
    } else {
        console.log('Erro: não há dados do voluntário ou a resposta é de erro');
    }
   
      await prismaDb.voluntario.delete({
        where: { id: idV},
      });

      // Excluir o usuário
      await prismaDb.usuario.delete({
        where: { id: usuarioId },
      });

      return true
    } catch (error) {
      console.error("Erro aodeletar  voluntario:", error);
      return { error: "Erro ao deletar voluntario" };
    }
  }
  
  async editarVoluntario(voluntario:any){
     try { 
     
        const voluntarioAtual = await this.buscarPorId(voluntario.id)

        if(!voluntario){
          throw new Error("Voluntario Nao encontrado")
        }
        let idUsuario = ""
        if ('voluntario' in voluntarioAtual && voluntarioAtual.voluntario !== null){

           idUsuario = voluntarioAtual.voluntario.usuarioId 
           const usuarioAtualizado = await prismaDb.usuario.update({
             where: { id: idUsuario },
             data: {
               nome: voluntario.nome ?? voluntarioAtual.nome, // Mantém o valor atual se não for fornecido
               email: voluntario.email ?? voluntarioAtual.email,
               tipo: voluntario.tipo ?? voluntarioAtual.tipo,
               imagem: voluntario.imagem ?? voluntarioAtual.imagem,
               voluntario: {
                 update: {
                   habilidades: voluntario.habilidades ?? voluntarioAtual.voluntario.habilidades,
                   interesses: voluntario.interesses ?? voluntarioAtual.voluntario.interesses,
                   disponibilidade: voluntario.disponibilidade ?? voluntarioAtual.voluntario.disponibilidade,
                 },
               },
             },
           });
           return usuarioAtualizado
        }
     } catch (error) {
      console.error("Erro ao alterar  voluntario:", error);
      return { error: "Erro ao alterar voluntario" };
     }
  }
}
