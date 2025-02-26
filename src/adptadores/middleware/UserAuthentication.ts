import { Request,Response, NextFunction } from "express";
import voluntarioDb from "../../core/useCase/Voluntario/VoluntarioRepositorio";
import jwtPort from "../../core/portas/JwtPort";
import JwtAdapter from "../auth/JwtAdapter";
import VoluntarioDb from "../../core/useCase/Voluntario/VoluntarioRepositorio";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
declare global {
    namespace Express {
      interface Request {
        usuario?:any; // Adicione a propriedade 'voluntario'
      }
    }
}
export default function UserAuthentication(voluntarioDb: VoluntarioDb,ongDb:OngRepositorioPort, _token: jwtPort){
     return  async (req:Request, res: Response, next: NextFunction) => {

        console.log("Chegou no middlware")
        try {
            const token = req.headers.authorization?.replace('Bearer ', '')


        if(!token){
            res.status(404).json("Token invalido")
            return
        }

        console.log(token)
        const tokenPayload= _token.validar(token) as any;
        console.log(tokenPayload, "token payload no auth")
        const email = tokenPayload.email; // Acessa diretamente o email do payload

        console.log(email, "email")
        const voluntario = await voluntarioDb.buscarPorEmail!(email);
  
        console.log(voluntario, "Usuaraio no auth")
        if(voluntario){
            req.usuario= voluntario
            next()
            
        }else if(!voluntario){
            const ong = await ongDb.buscarPorEmail!(email);
            req.usuario = ong
            next()
        }
        else{
            res.status(404).json("erro n aautenticacao")
        }
         
        } catch (error) {
            res.status(404).json("Token invalido")
        } 
     }
}