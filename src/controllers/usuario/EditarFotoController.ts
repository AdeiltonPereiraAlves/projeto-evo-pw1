import { Express, Request,Response} from "express";
import EditarFotoPerfil, { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil";
import EditarFotoPerfilOng from "../../core/useCase/Ong/EditarFotoPerfilOng";


export default class EditarFotoController{
    constructor(
        private servidor: Express,
        private casoDeUso: EditarFotoPerfil,
        private casoDeUso2: EditarFotoPerfilOng,
        ...middleware:any[]
    ){
        const atualizaFotoPerfil = async (req: Request, res:Response ): Promise<void> => {
            
            try {
                console.log("chegou no atualiza perfil", req.file)
                if (!req.usuario) {
                     res.status(401).send("Usuário não autenticado.");
                     return
                }
                const usuario = req.usuario
                console.log("chegou no atualiza perfil", usuario)
                let imagemUp = ""
                console.log(req.file, "req.file")
                // if(req.file){
                //     imagemUp = req.file.filename
                // }
                // else{
                //     imagemUp = usuario.usuario.imagem
                // }

                req.file? imagemUp= req.file.fieldname: imagemUp = usuario.usuario.imagem
                const fotoDto: fotoDto = {
                    imagem: imagemUp,
                    id: usuario.usuario.id
                }
                console.log(fotoDto, "fotodto")

                if(usuario.usuario.tipo ==="VOLUNTARIO"){
                    const usuarioAtual = await this.casoDeUso.executar(fotoDto)
                    res.status(200).json(usuarioAtual)

                }else{
                    const ongAtual = await this.casoDeUso2.executar(fotoDto)
                    res.status(200).json(ongAtual)
                }

               
             } catch (error:any) {
                res.status(400).send(error.message)
             }
        }
        this.servidor.patch("/usuario/imagem/perfil", ...middleware,atualizaFotoPerfil)
    }
}