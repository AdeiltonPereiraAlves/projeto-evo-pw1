import { triggerAsyncId } from "async_hooks";
import LoginVoluntario from "../../core/useCase/auth/LonginUsuario";
import { Request, Response, Express } from "express";
import LonginUsuario from "../../core/useCase/auth/LonginUsuario";
import { Voluntario } from "@prisma/client";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import VoluntarioDb from "../../core/useCase/Voluntario/VoluntarioDb";
export default class LoginUsuarioController{
    constructor(
        private servidor: Express,
        private casoDeuso: LonginUsuario,
       
    ){
        this.servidor.post('/login', async (req:Request, res:Response ) => {
            try {
                const login = {
                    email: req.body.email,
                    senha: req.body.senha
                }
                console.log(login, "login")
                const resposta = await this.casoDeuso.executar(login)
               
                    res.status(200).json(resposta)

            } catch (error:any) {
                res.status(403).send(error.message)
            }
        })
    }
}