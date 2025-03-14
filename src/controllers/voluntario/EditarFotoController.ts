import { Express, Request,Response} from "express";
import EditarFotoPerfil, { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil";


export default class EditarFotoController{
    constructor(
        private servidor: Express,
        private casoDeUso: EditarFotoPerfil,
        ...middleware:any[]
    ){
        const atualizaFotoPerfil = async (req: Request, res:Response ): Promise<void> => {
            
            try {
                console.log("chegou no atualiza perfil", req.file)
                if (!req.usuario) {
                     res.status(401).send("Usuário não autenticado.");
                     return
                }
                const voluntario = req.usuario

                console.log("chegou no atualiza perfil", voluntario)
                let imagemUp = ""
                if(req.file){
                    imagemUp = req.file.filename
                }
                const fotoDto: fotoDto = {
                    imagem: imagemUp,
                    id: voluntario.id
                }
                const voluntarioAtual = await this.casoDeUso.executar(fotoDto)
               
                res.status(200).json(voluntarioAtual)
             } catch (error:any) {
                res.status(400).send(error.message)
             }
        }
        this.servidor.patch("/voluntario/imagem/perfil", ...middleware,atualizaFotoPerfil)
    }
}