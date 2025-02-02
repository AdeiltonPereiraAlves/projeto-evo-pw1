import { Express, Request,Response} from "express";
import EditarFotoPerfilOng from "../../core/useCase/Ong/EditarFotoPerfilOng"
import { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil"


export default class EditarFotoController{
    constructor(
        private servidor: Express,
        private casoDeUso: EditarFotoPerfilOng,
        ...middleware:any[]
    ){
        const atualizaFotoPerfil = async (req: Request, res:Response ): Promise<void> => {
            
            try {
                console.log("chegou no atualiza perfil", req.file)
                if (!req.usuario) {
                     res.status(401).send("Usuário não autenticado.");
                     return
                }
                const ong = req.usuario

                console.log("chegou no atualiza perfil", ong)
                let imagemUp = ""
                if(req.file){
                    imagemUp = req.file.filename
                }
                const fotoDto: fotoDto = {
                    imagem: imagemUp,
                    id: ong.usuario.id
                }
                const ongAtual = await this.casoDeUso.executar(fotoDto)
               
                res.status(200).json(ongAtual)
             } catch (error:any) {
                res.status(400).send(error.message)
             }
        }
        this.servidor.patch("/ong/imagem/perfil", ...middleware,atualizaFotoPerfil)
    }
}