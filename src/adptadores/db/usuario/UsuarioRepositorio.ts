// BaseUsuarioRepositorio.ts
import { PrismaClient } from "@prisma/client";

import  UsuarioType  from "../../../@types/UsuarioType";

export default abstract class BaseUsuarioRepositorio<T> {
  protected prisma: PrismaClient;
  protected tipo: "ONG" | "VOLUNTARIO";
  protected pastaImagens: string; 

  constructor(tipo: "ONG" | "VOLUNTARIO", pastaImagens: string) {
    this.prisma = new PrismaClient();
    this.tipo = tipo;
    this.pastaImagens = pastaImagens;
  }


  async buscarPorEmail(email: string): Promise<any>  {
    const usuario =  await this.prisma.usuario.findUnique({
      where: { email, tipo: this.tipo },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any;
    return usuario
  }

  async buscarPorId(id: string): Promise<any> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id, tipo: this.tipo },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any
    return usuario
  }

  async editarFoto(id: string, novaImagem: string): Promise<any> {
    const usuario = await this.prisma.usuario.update({
      where: { id },
      data: { imagem: novaImagem },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any
    return usuario
  }

  abstract excluir(id: string): Promise<boolean>

  abstract registrar(entidade: any): Promise<T>;
  abstract atualizar(id: string, dados: Partial<T>): Promise<T>;
  abstract buscarTodos():any
  // --------------------------
  // Métodos Protegidos (Reuso Interno)
  // --------------------------
  // protected async excluirImagem(imagem: string): Promise<void> {
  //   const caminho = `public/images/${this.pastaImagens}/${imagem}`;
  //   await fs.unlink(caminho).catch(() => console.log("Imagem já excluída"));
  // }

}