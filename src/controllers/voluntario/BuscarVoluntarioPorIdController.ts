import BuscarPorId from "../../core/useCase/Voluntario/BuscarPorId";
import buscarVoluntarios from "../../core/useCase/Voluntario/BuscarVoluntarios";
import { Express, Request, Response } from "express";
export default class buscarVoluntarioPorIdControllers{
    constructor(
        private servidor:Express,
        private casoDeUso: BuscarPorId,
        ...middleware:any[]

    ){
      const buscar = async (req: Request,res:Response) =>{


            try {
                const usuario = req.usuario // pegando o payload depois do login com as informaões
                const id = req.usuario.id
                console.log(usuario ,"usuario da req")
                
                const result = await this.casoDeUso.executar(id)
                
                res.status(200).json(result)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
      }

      this.servidor.get("/perfil/:id",...middleware,buscar)
    }
}