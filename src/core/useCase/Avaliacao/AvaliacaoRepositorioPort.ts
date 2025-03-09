import AvaliacaoType from "../../../@types/AvaliacaoType"

export default interface AvaliacaoRepositorioPort{
    registrar(avaliacao: AvaliacaoType): Promise<any>
    buscarPorId(id: string): Promise<any>
    atualizar(avaliacao: AvaliacaoType): Promise<any>
    excluir(id: string): Promise<boolean>
    avaliacoesRecebidasVoluntario(id:string):any
    avaliacoesFeitasVoluntario(id:string):any
}