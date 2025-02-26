
import EditarVoluntario, { editarVoluntarioDto } from "../../core/useCase/Voluntario/EditarVoluntario";
import { Express, Response, Request } from "express";
export default class EditarVoluntarioController{
    constructor(
        private servidor: Express,
        private casoDeUso: EditarVoluntario,
        ...middleware: any[]
    ){
        const editarVoluntario = async (req: Request, res:Response) : Promise<void>=> {
              try {
                 const usuario = req.usuario
                 console.log(usuario,"usuario controller")
                 
                 const id = usuario?.id
                 if (!id) {
                    res.status(400).json({ error: "ID é obrigatório" });
                    return
                  }
                 let imagemUp = ""
                 if(req.file){
                    imagemUp = req.file.filename
                }
                console.log(req.body,"req body")
                 const {nome, email, habilidades,contato, interesses,disponibilidade} = req.body 
                  const voluntarioEditavel:editarVoluntarioDto = {
                    id,
                    nome,
                    email,
                    imagem:imagemUp|| usuario.imagem,
                    contato,
                    habilidades,
                    interesses,
                    disponibilidade
                  }
                 console.log(voluntarioEditavel,"volunter editar")
                 const voluntarioEditado = await this.casoDeUso.executar(voluntarioEditavel)


                 voluntarioEditado.senha = undefined // deixa a senha undefined
                 
                res.status(200).json(voluntarioEditado)
              } catch (error:any) {
                console.log(error, "erro msg")
                res.status(400).send(error.message)
              }
        }
        this.servidor.put("/voluntario/editar", ...middleware, editarVoluntario)

    }
}