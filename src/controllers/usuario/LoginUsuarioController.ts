import { triggerAsyncId } from "async_hooks";
import LoginVoluntario from "../../core/useCase/usuario/LoginUsuario";
import { Request, Response, Express } from "express";
import LoginUsuario from "../../core/useCase/usuario/LoginUsuario";
export default class LoginUsuarioController{
    constructor(
        private servidor: Express,
        private casoDeuso: LoginUsuario
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

