import CasoDeUso from "../../../@types/CasoDeUso";
import jwtPort from "../../portas/JwtPort";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import VoluntarioDb from "../../portas/VoluntarioDb";
export type Dto = {email: string, senha: string}
export default class LoginVoluntario implements CasoDeUso<Dto,any>{
    constructor(private voluntarioDb: VoluntarioDb, private provedorToken: jwtPort,private bcrypt: SenhaCriptografada){}

    async executar(dto:Dto){
         console.log("Chegou no caso de uso")
            const usuarioExistente = await this.voluntarioDb.buscarPorEmail(dto.email)
            console.log(usuarioExistente)
            if(!usuarioExistente) throw new Error("Usuario não existe")
            const senhaCrypto = usuarioExistente.senha
            
            console.log(dto.senha, senhaCrypto)
            const mesmaSenha = this.bcrypt.compararSenha(dto.senha, senhaCrypto)

            console.log(mesmaSenha,"senhas no casodeuso")
            if (!mesmaSenha) {
                throw new Error("Senhas diferentes");
            }
            
         

            return {
                usuario: { ...usuarioExistente, senha: undefined },
                token: this.provedorToken.gerar({
                    id: usuarioExistente.id,
                    nome: usuarioExistente.nome,
                    email: usuarioExistente.email,
                    tipo: usuarioExistente.tipo
                }),
            }
        
    }
}