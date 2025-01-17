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
                console.log(req.body.senha)
                console.log(req.body.email)
                const resposta = await this.casoDeuso.executar({
                    email: req.body.email,
                    senha:req.body.senha
                })
                console.log(resposta,"resposta")
                res.status(200).json(resposta)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
        })
    }
}