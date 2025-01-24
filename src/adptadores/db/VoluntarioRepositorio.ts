import Usuario from "../../core/model/usuario/Usuario";
import Voluntario from "../../core/model/voluntario/Voluntario";
import VoluntarioDb from "../../core/portas/VoluntarioDb";
import prismaDb from "../prismaDb/Prisma";

export default class VoluntarioRepositorio implements VoluntarioDb {
  constructor() {}
  async buscarVoluntarios() {
      try {
          const voluntarios = await prismaDb.voluntario.findMany({
          include: {
            usuario: {
              select: {
                nome: true,
                email:true,
                tipo: true
              }
            }
        
          }
            
         })
         return voluntarios
      } catch (error) {
        throw new Error("Erro no buscar voluntarios")
      }

    
  }
  async inserirUsuario(voluntario: Voluntario): Promise<any> {
    console.log("chegou no banco");
    try {
      const voluntarioRegistrado = await prismaDb.voluntario.create({
        data: {
          habilidades: voluntario.getHabilidades(),
          interesses: voluntario.getInteresses(),
          disponibilidade: voluntario.getDisponibilidade(),
          usuario: {
            create: {
              id: voluntario.getId(),
              nome: voluntario.getNome(),
              email: voluntario.getEmail(),
              senha: voluntario.getSenha(),
              imagem: voluntario.getImagem(),
              tipo: voluntario.getTipo(),
            },
          },
        },
      });
      console.log(voluntarioRegistrado);
      return voluntarioRegistrado;
    } catch (error) {
      throw new Error("erro no banco.");
    }
  }

  // buscar por email
  async buscarPorEmail( email: string) {
    try {
      const usuario = await prismaDb.usuario.findFirst({
        where: { email },
        include: {
          voluntario: true,
        },
      });
      if (!usuario) {
        return { error: "Usuário não encontrado" };
      }

      return usuario;
    } catch (error) {
      console.error("Erro ao buscar usuário pelo email:", error);
      return { error: "Erro ao buscar usuário" };
    }
  }
}
