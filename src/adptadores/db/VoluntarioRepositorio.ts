import Voluntario from "../../core/model/voluntario/Voluntario";
import Id from "../../core/shared/Id";
import VoluntarioDb from "../../core/portas/VoluntarioDb";
import prismaDb from "../prismaDb/Prisma";
import Disponibilidade from "../../@types/Disponibilidade";
export default class VoluntarioRepositorio implements VoluntarioDb {
  constructor() {}
  async inserirUsuario(voluntario: Voluntario):Promise<any> {
    console.log("chegou no banco")
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
       console.log(voluntarioRegistrado)
      return voluntarioRegistrado;
    } catch (error) {
      throw new Error("erro no banco.");
    }
  }
}
