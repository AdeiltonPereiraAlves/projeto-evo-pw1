import RegistrarVoluntario from "../../core/useCase/Voluntario/RegistrarVoluntario";
import { Express } from "express";
import cloudinary from "../../config/cloudinaryConfig";
import { Request, Response } from "express";
import LonginUsuario from "../../core/useCase/auth/LonginUsuario";

export default class RegistrarVoluntarioController {
    constructor(
        private servidor: Express,
        private casoDeUso: RegistrarVoluntario,
        private loginUsuario: LonginUsuario,
        ...middleware: any[]
    ) {

        const registratVoluntario = async (req: Request, res: Response) => {
            console.log("Chegou no controller")
            // let imagemUp
            // if(req.file){
            //     imagemUp = req.file.filename
            // }else{
            //     imagemUp = "public/images/profile.png"
            // }

          

          const voluntarioLogado = req.usuario


            let imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;

            if (req.file) {
                const filePath = (req.file as any).path; // caminho local do arquivo
                const publicId = `voluntarios/${voluntarioLogado.id}`; // public_id fixo por usuário

                // Upload para o Cloudinary, sobrescrevendo a antiga
                const result = await cloudinary.uploader.upload(filePath, {
                    public_id: publicId,
                    overwrite: true,
                });

                imagemUp = result.secure_url;
            }else{
                imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;
            }
           
            const { nome, email, tipo, contato, cpf, habilidades, interesses, disponibilidade, senha } = req.body

            try {
                const voluntario = await this.casoDeUso.executar({
                    nome,
                    email,
                    tipo,
                    contato,
                    cpf,
                    habilidades,
                    interesses,
                    disponibilidade,
                    senha,
                    imagem: imagemUp!
                })
                if (!voluntario) {
                    res.status(400).json("Erro ao registrar voluntario")
                    return
                }
                const voluntarioLogado = await this.loginUsuario.executar({ email, senha })
                res.status(201).json({ voluntarioLogado })
            } catch (error: any) {
                res.status(400).send(error.message)
            }
        }
        this.servidor.post('/registrar', middleware, registratVoluntario)

    }
}