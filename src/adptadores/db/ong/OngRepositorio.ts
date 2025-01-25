import Ong from "../../../core/model/ong/Ong";
import OngRepositorioPort from "../../../core/useCase/Ong/OngRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";

export default class OngRepositorio implements OngRepositorioPort  {
    constructor(){}
    async registrar(ong:Ong){
         try {
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