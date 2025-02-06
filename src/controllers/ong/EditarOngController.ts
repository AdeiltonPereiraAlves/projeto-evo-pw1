import EditarOng, { editarOngDto } from "../../core/useCase/Ong/EditarOng";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
export  default class EditarOngController{
    constructor(
        private servidor: Express,
        private casoDeUso: EditarOng,
        ...middleware: any[]
    ){
       const editar = async (req:Request, res: Response) => {
           try {
           const usuario = req.usuario
                            console.log(usuario,"usuario controller")
                            const id = usuario?.usuario.id
                            if (!id) {
                               res.status(400).json({ error: "ID é obrigatório" });
                               return
                             }
                            let imagemUp = ""
                            if(req.file){
                               imagemUp = req.file.filename
                           }
                           console.log(req.body,"req body")
                            const {nome, email,cnpj, missao, descricao, visao, areaAtuacao, endereco} = req.body 
                             const ongEditavel:editarOngDto = {
                               id,
                               nome,
                               email,
                               imagem:imagemUp|| usuario.imagem,
                               cnpj,
                               descricao,
                               missao,
                               visao,
                               areaAtuacao,
                               endereco
                             }
                            console.log(ongEditavel,"volunter editar")
                            const voluntarioEditado = await this.casoDeUso.executar(ongEditavel)
           
           
                            voluntarioEditado.senha = undefined // deixa a senha undefined
                            
                           res.status(200).json(voluntarioEditado)
           } catch (error:any) {
            res.status(400).send(error.message)
           }
        
       }
       this.servidor.put("/editar", ...middleware, editar)
    }
}