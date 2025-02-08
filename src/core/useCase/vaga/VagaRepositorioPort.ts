import VagaType from "../../../@types/VagaType"

export default interface VagaRepositorioPort {
    registrar(vaga:VagaType): any
    buscar():Promise<VagaType[]>
    excluir(id:string):Promise<any>
    buscarPorId(id:string):any
    editar(vaga:VagaType):any

}