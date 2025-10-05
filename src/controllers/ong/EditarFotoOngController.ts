import { Express, Request, Response } from "express";
import EditarFotoPerfil, { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil";
import EditarFotoOng from "../../core/useCase/Ong/EditarFotoOng";


export default class EditarFotoOngController {
    constructor(
        private servidor: Express,
        private casoDeUso: EditarFotoOng,
        ...middleware: any[]
    ) {
        const atualizaFotoPerfil = async (req: Request, res: Response): Promise<void> => {

            try {
                console.log("chegou no atualiza perfil da ong", req.file)
                if (!req.usuario) {
                    res.status(401).send("Usuário não autenticado.");
                    return
                }
                const ong = req.usuario

                console.log("chegou no atualiza perfil", ong)
                // let imagemUp = ""
                // if(req.file){
                //     imagemUp = req.file.filename
                // }

                let imagemUp = "";
                if (req.file) {
                    // imagem enviada pelo usuário
                    imagemUp = `ongs/${req.file.filename}`;
                } else {
                    // imagem padrão
                    imagemUp = "profile.png"; // somente o nome
                }

                const fotoDto: fotoDto = {
                    imagem: imagemUp,
                    id: ong.id
                }
                const ongAtual = await this.casoDeUso.executar(fotoDto)

                res.status(200).json(ongAtual)
            } catch (error: any) {
                res.status(400).send(error.message)
            }
        }
        this.servidor.patch("/ong/imagem/perfil", ...middleware, atualizaFotoPerfil)
    }
}