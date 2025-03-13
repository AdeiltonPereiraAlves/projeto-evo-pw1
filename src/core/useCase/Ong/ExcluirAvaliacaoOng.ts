import CasoDeUso from "../../../@types/CasoDeUso";
import AvaliacaoRepositorioPort from "../Avaliacao/AvaliacaoRepositorioPort";
import BuscarAvaliacaoPorId from "../Avaliacao/BuscarAvaliacaoPorId";
import BuscarOngPorId from "./BuscarOngPorId";
import OngRepositorioPort from "./OngRepositorioPort";

export type ExcluirAvaliacaoOngDto = {
    ongId:string,
    avaliacaoId: string
}
export default class ExcluirAvaliacaoOng implements CasoDeUso<ExcluirAvaliacaoOngDto,boolean>{
    constructor(private ongDb: OngRepositorioPort, private avalicaoRepositorio: AvaliacaoRepositorioPort){

    }
    async executar(dto:ExcluirAvaliacaoOngDto): Promise<boolean> {
        
        // const buscarAvalicao = new BuscarAvaliacaoPorId(this.avaliacaoRepositorio)
        // const  buscarAvalicao.executar(dto.avaliacaoId)
        const avalicaoes = await this.ongDb.listarAvalicaoesDeUmaOng(dto)
        const exiteAvalicao = avalicaoes.some((ava:any) => ava.id === dto.avaliacaoId)
        
        console.log(exiteAvalicao, "existe avalicao")

        if(!exiteAvalicao){
          throw new Error("Erro avalicao nao existe nessa ong")
        }
       
       
            
        const resposta = await this.avalicaoRepositorio.excluir(dto.avaliacaoId)

        return resposta;
        
    }

}