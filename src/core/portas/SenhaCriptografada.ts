export default interface SenhaCriptografada{
    criptarSenha(senha: string):string
    compararSenha(senha:string, senhaHash:string ): boolean 
}