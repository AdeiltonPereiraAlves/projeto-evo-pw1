import OngType from "../../../@types/OngType";

export default interface OngRepositorioPort {
    registrar(ong:OngType):any
    excluir(id:string):any
    atualizar(ong:any):any
    buscarTodos():any
    buscarVagasDeOng(id:string):any
    buscarPorEmail(email:string):any
    aprovarVoluntario(aprovacao:any):any
    listarVagaDeUmaOng(ong:any):any
    
    


   
}
 