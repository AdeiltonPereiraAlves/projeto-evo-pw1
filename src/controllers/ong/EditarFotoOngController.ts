import { Express, Request, Response } from "express";
import EditarFotoPerfil, { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil";
import EditarFotoOng from "../../core/useCase/Ong/EditarFotoOng";
import cloudinary from "../../config/cloudinaryConfig";

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


                let imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;

                if (req.file) {
                    const filePath = (req.file as any).path; // caminho local do arquivo
                    const publicId = `voluntarios/${ong.id}`; // public_id fixo por usuário

                    // Upload para o Cloudinary, sobrescrevendo a antiga
                    const result = await cloudinary.uploader.upload(filePath, {
                        public_id: publicId,
                        overwrite: true,
                    });

                    imagemUp = result.secure_url;
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