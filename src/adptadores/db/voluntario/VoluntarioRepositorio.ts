import { log } from "console";

import VoluntarioDb from "../../../core/useCase/Voluntario/VoluntarioDb";
import prismaDb from "../../prismaDb/Prisma";
import UsuarioType from "../../../@types/UsuarioType";
import VoluntarioType from "../../../@types/VoluntarioType";
import imagemUpload from "../../middleware/ImagemUpload";
import path from "path";
import fs from 'fs/promises';

export default class VoluntarioRepositorio  implements VoluntarioDb{

 
  
  
 
  async buscarPorId(id: string): Promise<any> {
    const voluntario = await prismaDb.voluntario.findUnique({
      where: { id },
    
    }) 
    return voluntario
  }
  async buscarTodos() {
    try {
      const voluntarios = await prismaDb.voluntario.findMany();
      return voluntarios;
    } catch (error) {
      throw new Error("Erro no buscar voluntarios");
    }
  }
  async registrar(voluntario: VoluntarioType): Promise<any> {
    console.log("chegou no banco");

    console.log(voluntario.imagem, "Imagem no banco");
    try {
      const voluntarioRegistrado = await prismaDb.voluntario.create({
        data: {
          id: voluntario.id,
          nome: voluntario.nome,
          email: voluntario.email,
          senha: voluntario.senha,
          imagem: voluntario.imagem,
          tipo: voluntario.tipo,
          contato: voluntario.contato,
          cpf: voluntario.cpf,
          habilidades: voluntario.habilidades,
          interesses: voluntario.interesses,
          disponibilidade: voluntario.disponibilidade,
         
          
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

     

      return true
    } catch (error) {
      console.error("Erro aodeletar  voluntario:", error);
      throw new Error("Erro ao excluir Voluntario")
      
    }
  }
  
  async atualizar(voluntario:VoluntarioType):Promise<VoluntarioType| any>{
     try { 
       
           const usuarioAtualizado = await prismaDb.voluntario.update({
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
