import path from "path";
import OngType from "../../../@types/OngType";
import Ong from "../../../core/model/ong/Ong";
import  UsuarioRepositorio  from "../usuario/UsuarioRepositorio";
import fs from 'fs/promises';
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import Erros from "../../../core/constants/Erros";
// OngRepositorio.ts
export class OngRepositorio extends UsuarioRepositorio<any> implements OngRepositorioPort {
  constructor() {
    super("ONG",'public/images/ong');
  }
  async buscarTodos() {
    try {
      const ong = await this.prisma.ong.findMany({
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
      return ong;
    } catch (error) {
      throw new Error("Erro no buscar ongs");
    }
    
  }
  async atualizar(ong:any): Promise<any> {
    try { 
      console.log(ong.id,ong, "id do ong")
       const ongAtual = await this.buscarPorId(ong.id)

       if(!ong){
         throw new Error("ong Nao encontrado")
       }
       let idUsuario = ""
       console.log(ongAtual, "ong atual")
      

          idUsuario = ongAtual.ong.usuarioId 

          console.log(idUsuario,"id usuario")
          const usuarioAtualizado = await this.prisma.usuario.update({
            where: { id: idUsuario },
            data: {
              nome: ong.nome ?? ongAtual.nome, // Mantém o valor atual se não for fornecido
              email: ong.email ?? ongAtual.email,
              imagem: ong.imagem ?? ongAtual.imagem,
              ong: {
                update: {
                    cnpj: ong.cnpj?? ongAtual.cnpj,
                    descricao: ong.descricao?? ongAtual.descricao,
                    missao: ong.missao?? ongAtual.missao,
                    visao: ong.visao?? ongAtual.visao,
                    areaAtuacao: ong.areaAtuacao?? ongAtual.areaAtuacao,
                    endereco: ong.endereco?? ongAtual.endereco, 
                },
              },
            },
            include: {ong:true}
          });
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
   
      await this.prisma.ong.delete({
        where: { id: idV},
      });

      // Excluir o usuário
      await this.prisma.usuario.delete({
        where: { id: usuarioId },
      });

      return true
    } catch (error) {
      console.error("Erro aodeletar  ong:", error);
      return false
    }
    
  }

  async registrar(ong: Ong): Promise<any> {

    try {
      const ongRegistrada = await this.prisma.ong.create({
    
        data: {
          cnpj:ong.getCnpj(),
          descricao: ong.getDescricao(),
          endereco: ong.getEndereco(),
          missao: ong.getMissao(),
          visao: ong.getVisao(),
          areaAtuacao: ong.getAreaAtuacao(),
          usuario: {
              create: {
                id: ong.getId(),
                nome: ong.getNome(),
                email: ong.getEmail(),
                senha: ong.getSenha(),
                imagem: ong.getImagem(),
                tipo: ong.getTipo(),
              },
            },
      },
      include: { usuario: true }
    });
    return ongRegistrada
    } catch (error) {
      // console.error("Erro ao cadastrar  ong:", error);
      // return { error: "Erro ao registrar ong" }
      throw new Error("Erro ao registrar ong")
    }
    
  }
  async editarFoto(novaImagem: string, id: string) {
    try {
      const ong = await this.buscarPorId(id);
      if ("error" in ong) {
        throw new Error(ong.error);
      }

      const ongFotoAtualizada = await this.prisma.usuario.update({
        where: {
          id: ong.id,
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

      return ongFotoAtualizada;
    } catch (error) {
      console.error("Erro ao editar da ong:", error);
      return { error: "Erro ao editar ong" };
    }
  }
 
}