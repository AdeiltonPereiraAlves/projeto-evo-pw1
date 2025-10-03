import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import LonginUsuario from "../../core/useCase/auth/LonginUsuario";
export default class RegistrarOngController{
    constructor(
      private servidor: Express,
      private casoDeUso: RegistrarOng,
      private loginUsuario: LonginUsuario,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {
 
         try {
          
            const {nome,email, tipo, senha, cnpj, descricao, visao, missao,areaAtuacao,endereco } = req.body
            console.log(req.body,"chegou no controler ong")
            const ong = await this.casoDeUso.executar(
                {  
                    nome,
                    email,
                    tipo,
                    missao,
                    cnpj,
                    descricao,
                    visao,
                    areaAtuacao,
                    endereco,
                    senha,
                   


                } as OngType
            )
            console.log(ong, "o")
            if(!ong) {
                res.status(400).json({message: "Erro ao registrar ongg"})
                return
            }
            const ongLogada = await this.loginUsuario.executar({email, senha})
            res.status(201).json(ongLogada)
            return
         } catch (error:any) {
            res.status(400).json(error.message)
         }
      }
      this.servidor.post("/ong/registrar",...middleware, registraOng)
    }
}