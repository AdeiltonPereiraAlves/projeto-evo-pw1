import Id from "../../core/shared/Id";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
import { RegistrarOng } from "../../core/useCase/Ong/RegistrarOng";
import OngType from "../../@types/OngType";
import LonginUsuario from "../../core/useCase/auth/LonginUsuario";
import cloudinary from "../../config/cloudinaryConfig";
export default class RegistrarOngController {
  constructor(
    private servidor: Express,
    private casoDeUso: RegistrarOng,
    private loginUsuario: LonginUsuario,
    ...middleware: any[]
  ) {
    const registraOng = async (req: Request, res: Response) => {

      try {
        //  let imagemUp
        //   if(req.file){
        //       imagemUp = req.file.filename
        //   }else{
        //       imagemUp = "public/images/profile.png"
        //   }

        // let imagemUp = "";
        // if (req.file) {
        //   // imagem enviada pelo usuário
        //   imagemUp = `ongs/${req.file.filename}`;
        // } else {
        //   // imagem padrão
        //   imagemUp = "profile.png"; // somente o nome
        // }
        const ongReq = req.usuario
        let imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;
        if (req.file) {
          const filePath = (req.file as any).path; // caminho local do arquivo
          const publicId = `voluntarios/${ongReq.id}`; // public_id fixo por usuário

          // Upload para o Cloudinary, sobrescrevendo a antiga
          const result = await cloudinary.uploader.upload(filePath, {
            public_id: publicId,
            overwrite: true,
          });

          imagemUp = result.secure_url;
        } else {
          imagemUp = process.env.DEFAULT_PROFILE_IMAGE!;
        }


        const { nome, email, tipo, senha, cnpj, descricao, visao, missao, areaAtuacao, endereco } = req.body
        console.log(req.body, "chegou no controler ong")
        const ong = await this.casoDeUso.executar(
          {
            nome,
            email,
            imagem: imagemUp!,
            tipo,
            missao,
            cnpj,
            descricao,
            visao,
            areaAtuacao,
            endereco,
            senha,



          } as OngType
        )
        console.log(ong, "o")
        if (!ong) {
          res.status(400).json({ message: "Erro ao registrar ongg" })
          return
        }
        const ongLogada = await this.loginUsuario.executar({ email, senha })
        res.status(201).json(ongLogada)
        return
      } catch (error: any) {
        res.status(400).json(error.message)
      }
    }
    this.servidor.post("/ong/registrar", ...middleware, registraOng)
  }
}