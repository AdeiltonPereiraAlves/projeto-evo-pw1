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
      console.log(payload, "payload")
      return jwt.sign(payload, this.jwtsecret, {expiresIn:'6d'})
    }
    validar(token: string): TokenPayload {
      console.log(token, "token no pay");
      const payload = jwt.verify(token, this.jwtsecret) as TokenPayload;
      console.log(payload, "token payload");
      return payload;
    }
}