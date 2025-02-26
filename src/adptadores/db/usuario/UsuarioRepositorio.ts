// BasevoluntarioRepositorio.ts
import { PrismaClient } from "@prisma/client";

import  voluntarioType  from "../../../@types/voluntarioType";
import voluntarioRepo from "../../../core/portas/voluntario/voluntarioRepo";
import prismaDb from "../../prismaDb/Prisma";
import VoluntarioType from "../../../@types/VoluntarioType";

export default  class BasevoluntarioRepositorio  implements voluntarioRepo{
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
    const voluntario =  await this.prisma.voluntario.findUnique({
      where: { email, tipo: this.tipo },
      include: { [this.tipo.toLowerCase()]: true },
    }) as any;

    console.log(voluntario,"voluntariodb")
    return voluntario
  }

  async buscarPorId(id: string): Promise<any> {
    const voluntario = await prismaDb.voluntario.findUnique({
      where: { id},
     
    }) 
    return voluntario
  }

  async editarFoto(id: string, novaImagem: string): Promise<VoluntarioType> {

    const voluntario = await prismaDb.voluntario.update({
      where: { id },
      data: { imagem: novaImagem },
      
    }) 

    console.log(voluntario, "voluntario edtarfoto")
    return voluntario
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