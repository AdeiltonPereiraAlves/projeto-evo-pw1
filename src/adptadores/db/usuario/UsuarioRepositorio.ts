// BaseUsuarioRepositorio.ts
import { PrismaClient } from "@prisma/client";

import  UsuarioType  from "../../../@types/UsuarioType";
import UsuarioRepo from "../../../core/portas/usuario/UsuarioRepo";

export default  class BaseUsuarioRepositorio  implements UsuarioRepo{
  protected prisma: PrismaClient;
  protected tipo: "ONG" | "VOLUNTARIO";
  protected pastaImagens: string; 

  constructor(tipo: "ONG" | "VOLUNTARIO", pastaImagens: string) {
    this.prisma = new PrismaClient();
    this.tipo = tipo;
    this.pastaImagens = pastaImagens;
  }
 

  async buscarPorEmail(email: string): Promise<any>  {

    console.log(email,this.tipo, "email")
    const usuario =  await this.prisma.usuario.findUnique({
      where: { email, tipo: this.tipo },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any;

    console.log(usuario,"usuariodb")
    return usuario
  }

  async buscarPorId(id: string): Promise<any> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id, tipo: this.tipo },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any
    return usuario
  }

  async editarFoto(id: string, novaImagem: string): Promise<UsuarioType> {

    const usuario = await this.prisma.usuario.update({
      where: { id },
      data: { imagem: novaImagem },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any

    console.log(usuario, "usuario edtarfoto")
    return usuario
  }

  //  excluir(id: string): Promise<boolean>

  //  registrar(entidade: any): Promise<T>;
  //  atualizar(id: string, dados: Partial<T>): Promise<T>;
  // buscarTodos():any
  // --------------------------
  // Métodos Protegidos (Reuso Interno)
  // --------------------------
  // protected async excluirImagem(imagem: string): Promise<void> {
  //   const caminho = `public/images/${this.pastaImagens}/${imagem}`;
  //   await fs.unlink(caminho).catch(() => console.log("Imagem já excluída"));
  // }

}