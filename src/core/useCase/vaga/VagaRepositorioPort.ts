import VagaSaidaType from "../../../@types/VagaSaidaType"
import VagaType from "../../../@types/VagaType"
import Vaga from "../../model/vaga/Vaga"

export default interface VagaRepositorioPort {
    registrar(vaga:Vaga): Promise<VagaSaidaType>
    buscar():Promise<VagaSaidaType[]|null>
    excluir(id:string, idOng:string):Promise<boolean>
    buscarPorId(id:string):Promise<VagaSaidaType| null>
    editar(vaga:VagaType):Promise<VagaSaidaType>
    filtrarVagas(termo: string):any

}