import BuscarOngs from "../../core/useCase/Ong/BuscarOngs";
import BuscarVoluntarios from "../../core/useCase/Voluntario/BuscarVoluntarios";
import { Express, Request, Response } from "express";
export default class BuscarUsuarioControllers{
    constructor(
        private servidor:Express,
        private casoDeUso: BuscarVoluntarios,
        private casoDeUso2: BuscarOngs,
        ...middleware:any[]

    ){
      const buscar = async (req: Request,res:Response) =>{


            try {
                const usuario = req.usuario // pegando o payload depois do login com as informaões
                console.log(usuario ,"usuario da req")
                
               if(usuario!.usuario.tipo === "VOLUNTARIO"){
                const result = await this.casoDeUso.executar()
                
                res.status(200).json(result)
               }
               else {
                const result = await this.casoDeUso2.executar()
                
                res.status(200).json(result)
               }
            } catch (error:any) {
                res.status(403).send(error.message)
            }
      }

      this.servidor.get("/buscar",...middleware,buscar)
    }
}