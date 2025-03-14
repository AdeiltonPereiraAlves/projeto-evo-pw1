import buscarVoluntarios from "../../core/useCase/Voluntario/BuscarVoluntarios";
import { Express, Request, Response } from "express";
export default class buscarVoluntariosControllers{
    constructor(
        private servidor:Express,
        private casoDeUso: buscarVoluntarios,
        ...middleware:any[]

    ){
      const buscar = async (req: Request,res:Response) =>{


            try {
                const usuario = req.usuario // pegando o payload depois do login com as informaões
                console.log(usuario ,"usuario da req")
                
                const result = await this.casoDeUso.executar()
                
                res.status(200).json(result)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
      }

      this.servidor.get("/buscar",...middleware,buscar)
    }
}