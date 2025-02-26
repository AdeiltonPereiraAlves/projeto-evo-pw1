import path from "path";
import OngType from "../../../@types/OngType";
import Ong from "../../../core/model/ong/Ong";
import prismaDb from "../../prismaDb/Prisma";
import  UsuarioRepositorio  from "../usuario/UsuarioRepositorio";
import fs from 'fs/promises';
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import Erros from "../../../core/constants/Erros";
import UsuarioType from "../../../@types/UsuarioType";
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
    
    }) 
    return ong
  }

  async atualizar(ong:any): Promise<any> {
    try { 
   
          const usuarioAtualizado = await prismaDb.ong.update({
            where: { id:ong.id },
            data: {
              ...ong
          }});
          return usuarioAtualizado
       
    } catch (error) {
     console.error("Erro ao alterar  ong:", error);
     
    }
 }
    
  
  async excluir(id: string):Promise<boolean> {
    try {
      const  resposta = await this.buscarPorId(id);
      let usuarioId = ""
      let idV =""
      if (!resposta) {
       throw new Error("ong Nao encontrada")
      }
      console.log(resposta, "resposta")
      if ('ong' in resposta && resposta.ong !== null) {
        usuarioId = resposta.ong.usuarioId;
        idV = resposta.ong.id

        console.log(idV, "idv")
        const imagePath = path.resolve(`public/images/ongs/${resposta.imagem}`);
        await fs.unlink(imagePath).catch(() => console.log('Imagem já foi excluída.'));
        console.log('ID do usuário:', usuarioId);
    } else {
        console.log('Erro: não há dados do voluntário ou a resposta é de erro');
    }
   
      await prismaDb.ong.delete({
        where: { id: idV},
      });

      // Excluir o usuário
    

      return true
    } catch (error) {
      console.error("Erro aodeletar  ong:", error);
      return false
    }
    
  }

  async registrar(ong: OngType): Promise<any> {

    try {
      const ongRegistrada = await prismaDb.ong.create({
    
        data: {
        ...ong
           
      },
     
    });
    return ongRegistrada
    } catch (error) {
      // console.error("Erro ao cadastrar  ong:", error);
      // return { error: "Erro ao registrar ong" }
      throw new Error("Erro ao registrar ong")
    }
    
  }
  async buscarVagasDeOng(id:string){
     try {
        const ongComVagas = await prismaDb.ong.findUnique({
          where: {id},
          include: {
            
            vagas: {
              include: {
                inscricoes: true
              },
            },
          },
        })
        return ongComVagas
     } catch (error) {
      throw new Error("Erro ao ong com vagas")
     }
  }

  async buscarPorEmail(email: string): Promise<any>  {

    console.log(email, "email")
    const ong =  await prismaDb.ong.findUnique({
      where: { email},
     
    }) 

    console.log(ong,"ong")
    return ong
  }
 
 
}