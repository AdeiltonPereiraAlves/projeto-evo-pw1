import jwt from 'jsonwebtoken'
interface TokenPayload {
    id: string;
    nome: string;
    email: string;
    tipo: string;
    [key: string]: any; // Caso precise de campos adicionais
  }
export default class JwtAdapter{
    constructor(private jwtsecret: string){

    }
    gerar(payload:string| object):string {
      return jwt.sign(payload, this.jwtsecret, {expiresIn:'1d'})
    }
    validar(token:string):TokenPayload{
        return jwt.verify(token, this.jwtsecret) as TokenPayload
    }
}