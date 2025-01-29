import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
export default class RegistrarOngController{
    constructor(
      private servidor: Express,
      private casoDeUso: RegistrarOng,
      ...middleware: any[]
    ){
      const registraOng = async(req:Request, res:Response) => {
    //     cnpj:string
    // descricao: string
    // visao: string
    // missao :string
    // areaAtuacao: AreaAtuacao[]
    // endereco: string
         try {
            const {nome,email, tipo,imagem, senha, cnpj, descricao, visao, missao,areaAtuacao,endereco } = req.body
            console.log("chegou no controler ong")
            const o = await this.casoDeUso.executar(
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
                    imagem,


                }
            )
            console.log(o, "o")
            res.status(201).json(o)
         } catch (error:any) {
            res.status(400).send(error.message)
         }
      }
      this.servidor.post("/ong/registrar",registraOng)
    }
}
