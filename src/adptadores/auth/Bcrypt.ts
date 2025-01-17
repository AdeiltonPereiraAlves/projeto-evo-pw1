import SenhaCriptografada from "../../core/portas/SenhaCriptografada";
import bcrypt from "bcrypt";
export default class Bcrypt implements SenhaCriptografada {
  constructor() {}

  criptarSenha(senha: string):string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(senha, salt);
  }
  compararSenha(senha:string, senhaHash:string ): boolean {
    if(!senha || senhaHash){
        throw new Error("Senha Invalida")
    }

    return bcrypt.compareSync(senha, senhaHash)
  }
}
