import { Express, Request, Response } from "express";
import EditarFotoPerfil, { fotoDto } from "../../core/useCase/Voluntario/EditarFotoPerfil";
import cloudinary from "../../config/cloudinaryConfig";

export default class EditarFotoController {
    constructor(
        private servidor: Express,
        private casoDeUso: EditarFotoPerfil,
        ...middleware: any[]
    ) {
        const atualizaFotoPerfil = async (req: Request, res: Response): Promise<void> => {

            try {
                console.log("chegou no atualiza perfil", req.file)
                if (!req.usuario) {
                    res.status(401).send("Usuário não autenticado.");
                    return
                }
                const voluntario = req.usuario


                console.log(voluntario, "arquivo da req")
                // if (req.file && "path" in req.file) {
                //     imagemUp = (req.file as any).path; // URL pública do Cloudinary
                //     console.log(imagemUp, "imagem do cloudinary")
                // } else {

                //     imagemUp = `https://cloudinary.com/${process.env.CLOUD_NAME}/image/upload/v1760047506/profile.png`; // URL padrão
                // }

              
                let imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;

              if (req.file) {
                    const filePath = (req.file as any).path; // caminho local do arquivo
                    const publicId = `voluntarios/${voluntario.id}`; // public_id fixo por usuário

                    // Upload para o Cloudinary, sobrescrevendo a antiga
                    const result = await cloudinary.uploader.upload(filePath, {
                        public_id: publicId,
                        overwrite: true,
                    });

                    imagemUp = result.secure_url;
                }

                const fotoDto: fotoDto = {
                    imagem: imagemUp,
                    id: voluntario.id
                }
                const voluntarioAtual = await this.casoDeUso.executar(fotoDto)

                res.status(200).json(voluntarioAtual)
            } catch (error: any) {
                res.status(400).send(error.message)
            }
        }
        this.servidor.patch("/voluntario/imagem/perfil", ...middleware, atualizaFotoPerfil)
    }
}