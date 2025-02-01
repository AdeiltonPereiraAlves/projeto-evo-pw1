import OngType from "../../../@types/OngType";
import Ong from "../../../core/model/ong/Ong";
import  UsuarioRepositorio  from "../usuario/UsuarioRepositorio";

// OngRepositorio.ts
export class OngRepositorio extends UsuarioRepositorio<Ong> {
  buscarTodos() {
    throw new Error("Method not implemented.");
  }
  atualizar(id: string, dados: Partial<Ong>): Promise<Ong> {
    throw new Error("Method not implemented.");
  }
  constructor() {
    super("ONG",'///');
  }
  excluir(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
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

  // async excluir(id: string): Promise<boolean> {
  //   // Lógica específica para exclusão de ONG
  // }
}