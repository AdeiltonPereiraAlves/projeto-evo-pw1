import RegistrarVoluntario from "../../core/useCase/Voluntario/RegistrarVoluntario";
import { Express } from "express";

import { Request, Response } from "express";

export default class RegistrarVoluntarioController{
    constructor(
        private servidor: Express, 
        private casoDeUso: RegistrarVoluntario,
        ...middleware: any[]
    ){
        
        const registratVoluntario = async (req:Request,res: Response) => {
            console.log("Chegou no controller")
            let imagemUp
            if(req.file){
                imagemUp = req.file.filename
            }else{
                imagemUp = "public/images/profile.png"
            }
            const {nome, email, tipo,contato, cpf, habilidades, interesses,disponibilidade,senha} = req.body 
           
            try {
                await this.casoDeUso.executar({
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
                
                res.status(201).send()
            } catch (error:any) {
                res.status(400).send(error.message)
            }
        }
        this.servidor.post('/registrar', middleware,registratVoluntario)

    }
}