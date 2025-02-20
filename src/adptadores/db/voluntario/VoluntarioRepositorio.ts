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
import BaseUsuarioRepositorio from "../usuario/UsuarioRepositorio";

export default class VoluntarioRepositorio extends BaseUsuarioRepositorio implements VoluntarioDb{

 
  
  
  constructor() {
    super("VOLUNTARIO","public/images/voluntario")
  }

  async buscarTodos() {
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
  async registrar(voluntario: Voluntario): Promise<any> {
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
 
 
  //excluir voluntario
  async excluir(id: string):Promise<boolean>{
    try {
      console.log(id,"id")
      const  resposta = await this.buscarPorId(id);
      console.log(resposta, "resposta")
      let usuarioId = ""
      let idV =""
      if (!resposta) {
       throw new Error("Voluntario Nao encontrado")
      }
     
        usuarioId = resposta.voluntario.usuarioId;
        idV = resposta.voluntario.id

        console.log(idV, "idv")
        const imagePath = path.resolve(`public/images/voluntarios/${resposta.imagem}`);
        await fs.unlink(imagePath).catch(() => console.log('Imagem já foi excluída.'));
        console.log('ID do usuário:', usuarioId);
   
  
   
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
      throw new Error("Erro ao excluir Voluntario")
      
    }
  }
  
  async atualizar(voluntario:VoluntarioType):Promise<VoluntarioType| any>{
     try { 
       
           const usuarioAtualizado = await prismaDb.usuario.update({
             where: { id: voluntario.id },
            
             data: {...voluntario }
           });
           return usuarioAtualizado
        
     } catch (error) {
      console.error("Erro ao alterar  voluntario:", error);
      throw new Error("erro ao atualizar voluntario")
      
     }
  }
}
