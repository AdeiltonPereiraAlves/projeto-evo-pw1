import RegistrarVoluntario from "../../core/useCase/Voluntario/RegistrarVoluntario";
import { Express } from "express";
export default class RegistrarVoluntarioController{
    constructor(
        private servidor: Express, 
        private casoDeUso: RegistrarVoluntario
    ){

        this.servidor.post('/registrar', async (req,res) => {
            console.log("Chegou no controller")
            try {
               const v =  await this.casoDeUso.executar({
                    nome: req.body.nome,
                    email: req.body.email,
                    tipo: req.body.tipo,
                    habilidades: req.body.habilidades,
                    interesses: req.body.interesses,
                    disponibilidade: req.body.disponibilidade,
                    senha: req.body.senha ,
                    imagem: req.body.imagem 
                })
                console.log(v)
                res.status(201).json(v)
            } catch (error:any) {
                res.status(400).send(error.message)
            }
        })
    }
}