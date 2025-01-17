export default interface jwtPort{
    gerar(payload:string| object):string 
    validar(token:string):string| object
}