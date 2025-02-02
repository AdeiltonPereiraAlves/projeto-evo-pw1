import { Request,Response, NextFunction } from "express";
import UsuarioDb from "../../core/portas/VoluntarioDb";
import jwtPort from "../../core/portas/JwtPort";
import JwtAdapter from "../auth/JwtAdapter";
import Usuario from "../../core/model/usuario/Usuario";
import VoluntarioDb from "../../core/portas/VoluntarioDb";
import UsuarioType from "../../@types/UsuarioType";
import UsuarioRepo from "../../core/portas/usuario/UsuarioRepo";
declare global {
    namespace Express {
      interface Request {
        usuario?:UsuarioType; // Adicione a propriedade 'usuario'
      }
    }
}
export default function UserAuthentication(_usuarioDb: Partial<UsuarioRepo>, _token: jwtPort){
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
        const usuario = await _usuarioDb.buscarPorEmail!(email);
  
        console.log(usuario, "Usuaraio no auth")
        if(!usuario){
            res.status(404).json("Token invalido")
            return
        }
         
        req.usuario = usuario
        next()
        } catch (error) {
            res.status(404).json("Token invalido")
        } 
     }
}