import { triggerAsyncId } from "async_hooks";
import LoginVoluntario from "../../core/useCase/Voluntario/LoginVoluntario";
import { Request, Response, Express } from "express";
export default class LoginvoluntarioController{
    constructor(
        private servidor: Express,
        private casoDeuso: LoginVoluntario
    ){
        this.servidor.post('/login', async (req:Request, res:Response ) => {
            try {
                const login = {
                    email: req.body.email,
                    senha: req.body.senha
                }
                const resposta = await this.casoDeuso.executar(login)
               
                res.status(200).json(resposta)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        })
    }
}