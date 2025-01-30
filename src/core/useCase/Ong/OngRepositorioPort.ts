import Ong from "../../model/ong/Ong";

export default interface OngRepositorioPort {
    registrar(ong:Ong):any
    deletar(id:string):any
    editarFoto(novaImagem: string, id: string):void
}
 