import jwtPort from "../../portas/JwtPort";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import VoluntarioDb from "../../portas/VoluntarioDb";
export type Dto = {email: string, senha: string}
export default class LoginVoluntario {
    constructor(private voluntarioDb: VoluntarioDb, private provedorToken: jwtPort,private bcrypt: SenhaCriptografada){}

    async executar(dto:Dto){
       
            const usuarioExistente = await this.voluntarioDb.buscarPorEmail(dto.email)

            if(!usuarioExistente) throw new Error("Usuario não existe")
             const senhaCrypto = usuarioExistente.senha
            const mesmaSenha = this.bcrypt.compararSenha(dto.senha, senhaCrypto)
            if (!mesmaSenha) {
                throw new Error("Senhas diferentes");
              }
            
         

            return {
                usuario: { ...usuarioExistente, senha: undefined },
                token: this.provedorToken.gerar({
                    id: usuarioExistente.id,
                    nome: usuarioExistente.nome,
                    email: usuarioExistente.email,
                }),
            }
        
    }
}