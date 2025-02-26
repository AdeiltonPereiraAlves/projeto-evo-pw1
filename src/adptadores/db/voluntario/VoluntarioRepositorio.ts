

import VoluntarioRepositorioPort from "../../../core/useCase/Voluntario/VoluntarioRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";
import VoluntarioType from "../../../@types/VoluntarioType";
import path from "path";
import fs from 'fs/promises';
import { Inscricao } from "@prisma/client";

export default class VoluntarioRepositorio  implements VoluntarioRepositorioPort{

 
  
  
 
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
         ...voluntario
         
          
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
 

  async buscarPorEmail(email: string): Promise<any>  {

    console.log(email, "email")
    const voluntario =  await prismaDb.voluntario.findUnique({
      where: { email},
     
    }) 

    console.log(voluntario,"voluntario")
    return voluntario
  }
 
  //excluir voluntario
  async excluir(id: string):Promise<boolean>{
    try {
      
      // let usuarioId = ""
      // let idV =""
     
     
      //   usuarioId = resposta.voluntario.usuarioId;
      //   idV = resposta.voluntario.id

      //   console.log(idV, "idv")
      //   const imagePath = path.resolve(`public/images/voluntarios/${resposta.imagem}`);
      //   await fs.unlink(imagePath).catch(() => console.log('Imagem já foi excluída.'));
      //   console.log('ID do usuário:', usuarioId);
   
  
   
      await prismaDb.voluntario.delete({
        where: { id},
      });

     

      return true
    } catch (error) {
      console.error("Erro aodeletar  voluntario:", error);
      throw new Error("Erro ao excluir Voluntario")
      
    }
  }
  
  async atualizar(voluntario:VoluntarioType):Promise<VoluntarioType| any>{
     try { 
       
           const voluntarioAtualizado = await prismaDb.voluntario.update({
             where: { id: voluntario.id },
            
             data: {...voluntario }
           });
           return voluntarioAtualizado
        
     } catch (error) {
      console.error("Erro ao alterar  voluntario:", error);
      throw new Error("erro ao atualizar voluntario")
      
     }
  }
  async editarFoto(id: string, novaImagem: string): Promise<boolean> {

    const voluntario = await prismaDb.voluntario.update({
      where: { id },
      data: { imagem: novaImagem },
      
    }) 

    
    return voluntario?true: false
  }
  async listarInscricoesVoluntario(id: string):Promise<Partial<Inscricao>| null>{
    try {
      const inscricoes = await prismaDb.voluntario.findFirst({
        where:{
          id,
        },
        include:{
          inscricoes:true
        }
      })
  
      return inscricoes
    } catch (error) {
      throw new Error("Erro ao listar inscricoes")
    }
  }
}
