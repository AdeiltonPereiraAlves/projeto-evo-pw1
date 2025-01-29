import UsuarioRepo from "../../../core/portas/usuario/UsuarioRepo";
import prismaDb from "../../prismaDb/Prisma";

export default class UsurioRepositorio implements UsuarioRepo{
    async buscarPorEmail(email: string) {
      if (!email) {
        throw new Error("Email inválido para busca");
      }
        console.log(email, "email no db")
        try {
          const voluntario = await prismaDb.usuario.findUnique({
            where: {
              email:email,
            },
            // include: {
            //   voluntario: true, // Inclui os dados do voluntário
            // },
          });
          console.log(voluntario, "voluntario")
          if (!voluntario) {
            return { error: "Usuário não encontrado" };
          }
          console.log(voluntario,"usuario db")
          let voluntarioV: any
          let ong:any
          if(voluntario!.tipo === "VOLUNTARIO"){
            voluntarioV = await prismaDb.voluntario.findUnique({where:{usuarioId: voluntario!.id}, include:{usuario:true}})
            console.log(voluntarioV,"voluntariov")
            return voluntarioV;
          }
          else if(voluntario!.tipo ==="ONG"){
              ong = await prismaDb.ong.findUnique({where:{usuarioId: voluntario.id}, include:{usuario:true}})
              
              return ong
          }
    
          
        } catch (error) {
          console.error("Erro ao buscar usuário pelo email:", error);
          return { error: "Erro ao buscar usuário" };
        }
      }
}