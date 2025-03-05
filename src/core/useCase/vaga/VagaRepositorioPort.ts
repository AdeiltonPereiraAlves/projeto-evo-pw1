import VagaType from "../../../@types/VagaType"

export default interface VagaRepositorioPort {
    registrar(vaga:VagaType): any
    buscar():Promise<VagaType[]|null>
    excluir(id:string, idOng:string):Promise<boolean>
    buscarPorId(id:string):any
    editar(vaga:VagaType):any
    filtrarVagas(termo: string):any

}