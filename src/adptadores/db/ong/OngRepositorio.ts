import path from "path";
import OngType from "../../../@types/OngType";
import Ong from "../../../core/model/ong/Ong";
import  UsuarioRepositorio  from "../usuario/UsuarioRepositorio";
import fs from 'fs/promises';
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
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
  atualizar(id: string, dados: Partial<Ong>): Promise<Ong> {
    throw new Error("Method not implemented.");
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
      console.error("Erro aodeletar  voluntario:", error);
      return false
    }
    
  }

  async registrar(ong: Ong): Promise<any> {
    return await this.prisma.ong.create({
    
        data: {
          cnpj:ong.getCnpj(),
          descricao: ong.getDescricao(),
          endereco: ong.getEndereco(),
          misao: ong.getMissao(),
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