import ExcluirOng from "../../core/useCase/Ong/ExcluirOng";
import ExcluirVoluntario from "../../core/useCase/Voluntario/ExcluirVoluntario";
import { Express, Response , Request } from "express";
export default class ExcluirVoluntarioController{
    constructor(
      private servidor: Express,
      private casoDeUso: ExcluirVoluntario,
      private casoDeUso2: ExcluirOng,
      ...middleware: any[]
    ){
        const excluirVoluntario = async (req:Request, res: Response) => {

            try {
                 const {id} = req.params
                 const user = req.usuario

                 console.log(user, "user")
                 if(user!.tipo === "ONG"){
                    const resposta =await this.casoDeUso2.executar(id)
                    res.status(200).json(resposta)
                 }
                 const resposta =await this.casoDeUso.executar(id)
                 res.status(200).json(resposta)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        }
        this.servidor.delete("/voluntario/excluir/:id", ...middleware, excluirVoluntario)
    }
}