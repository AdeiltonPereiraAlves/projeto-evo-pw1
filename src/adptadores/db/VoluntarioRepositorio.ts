import Voluntario from "../../core/model/voluntario/Voluntario";
import VoluntarioDb from "../../portas/VoluntarioDb";
import prismaDb from "../prismaDb/Prisma";
export default class VoluntarioRepositorio implements VoluntarioDb {
  constructor() {}
  async inserirUsuario(voluntario: Voluntario) {
    try {
      const disponibilidade = voluntario.getDisponibilidade();
      if (!Array.isArray(disponibilidade)) {
        throw new Error("Disponibilidade deve ser um array.");
      }
      const voluntarioRegistrado = await prismaDb.voluntario.create({
        data: {
          id: voluntario.getId(),
          
          habilidades: voluntario.getHabilidades(),
          interesses: voluntario.getInteresses(),
          disponibilidade: disponibilidade,
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

      return voluntarioRegistrado;
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}
