import ExcluirOng from "../../core/useCase/Ong/ExcluirOng";
import ExcluirVoluntario from "../../core/useCase/Voluntario/ExcluirVoluntario";
import { Express, Response , Request } from "express";
export default class ExcluirUsuarioController{
    constructor(
      private servidor: Express,
      private casoDeUso: ExcluirVoluntario,
      private casoDeUso2: ExcluirOng,
      ...middleware: any[]
    ){
        const excluirUsuario = async (req:Request, res: Response) => {

            try {
                
                 const user = req.usuario
                 const id = user!.usuario.id
                 if(!id) throw new Error("Erro no id")
                 console.log(user, "user")
                 if(user!.usuario.tipo === "ONG"){
                    const resposta =await this.casoDeUso2.executar(id)
                    res.status(200).json(resposta)
                 }
                 else {

                     const resposta =await this.casoDeUso.executar(id)
                     res.status(200).json(resposta)
                 }
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }
        this.servidor.delete("/usuario/excluir", ...middleware, excluirUsuario)
    }
}