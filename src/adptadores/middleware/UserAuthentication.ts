import { Request,Response, NextFunction } from "express";
import UsuarioDb from "../../core/portas/VoluntarioDb";
import jwtPort from "../../core/portas/JwtPort";
import JwtAdapter from "../auth/JwtAdapter";
import Usuario from "../../core/model/usuario/Usuario";
import VoluntarioDb from "../../core/portas/VoluntarioDb";

export default function UserAuthentication(_usuarioDb: VoluntarioDb, _token: jwtPort){
     return  async (req:Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization?.replace('Bearer ', '')
        if(!token){
            res.status(404).json("Token invalido")
            return
        }
        const tokenPayload = _token.validar(token) as Usuario;

        const email = tokenPayload.getEmail(); // Acessa diretamente o email do payload
        const usuario = await _usuarioDb.buscarPorEmail(email);
  

        if(!usuario){
            res.status(404).json("Token invalido")
            return
        }

        (req as any ).usuario = usuario
        next()
        } catch (error) {
            res.status(404).json("Token invalido")
        } 
     }
}