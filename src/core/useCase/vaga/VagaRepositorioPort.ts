import VagaType from "../../../@types/VagaType"
import Vaga from "../../model/vaga/Vaga"

export default interface VagaRepositorioPort {
    registrar(vaga:Vaga): any
    buscar():Promise<VagaType[]|null>
    excluir(id:string, idOng:string):Promise<boolean>
    buscarPorId(id:string):any
    editar(vaga:VagaType):any
    filtrarVagas(termo: string):any

}