import AvaliacaoType from "../../../@types/AvaliacaoType"
import Tipo from "../../../@types/Tipo"
import { atualizaAvaliacaoDto } from "./AtualizarAvaliacao"

export default interface AvaliacaoRepositorioPort{
    registrar(avaliacao: AvaliacaoType): Promise<any>
    buscarPorId(id: string): Promise<any>
    atualizar(avaliacao: atualizaAvaliacaoDto): Promise<any>
    excluir(id: string): Promise<boolean>
    avaliacoesRecebidasVoluntario(id:string, tipo:Tipo):any
    avaliacoesFeitasVoluntario(id:string, tipo:Tipo):any
    avaliacoesFeitasOng(id:string, tipo:Tipo):any
}