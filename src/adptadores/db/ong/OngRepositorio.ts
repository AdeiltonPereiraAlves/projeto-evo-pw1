import path from "path";
import Ong from "../../../core/model/ong/Ong";
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";
import fs from 'fs/promises';
export default class OngRepositorio implements OngRepositorioPort  {
    constructor(){}
  async deletar(id: string) {
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
      await prismaDb.usuario.delete({
        where: { id: usuarioId },
      });

      return true
    } catch (error) {
      console.error("Erro aodeletar  voluntario:", error);
      return { error: "Erro ao deletar voluntario" };
    }
    
  }
  async buscarPorId(id: string) {
    try {
      if (!id) {
        throw new Error("ID não foi fornecido");
      }
      const ong = await prismaDb.usuario.findUnique({
        where: { id },
        include: {ong: true },
      });

      if (!ong) {
        return { error: "Id nao encontrado" };
      }
      return ong;
    } catch (error) {
      console.error("Erro ao buscar voluntario pelo id:", error);
      return { error: "Erro ao buscar voluntario" };
    }
    throw new Error("Method not implemented.");
  }
    async registrar(ong:Ong){
         try {
          console.log(ong, "ong")
           const resposta =  await prismaDb.ong.create({
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

                    


                }
            })

            return resposta
         } catch (error) {
            throw new Error("erro no banco da ong.");
         }
    }
}