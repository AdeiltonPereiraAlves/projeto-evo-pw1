import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorioPort from "../Inscricao/InscricaoRepositorio";
import AvaliacaoRepositorioPort from "../Avaliacao/AvaliacaoRepositorioPort";
import Tipo from "../../../@types/Tipo";


export type avaliacaoDto = {
    id:string,
    tipo: Tipo
}
export default class ListarAvaliacoesFeitasOng implements CasoDeUso<avaliacaoDto, any> {
    constructor(private avaliacaoRepositorio: AvaliacaoRepositorioPort){}
     async executar(dto:avaliacaoDto){
          
       try {
        // const buscarId = new BuscarPorId(this.voluntarioRepositorio)
        // const voluntario = await buscarId.executar(id)

        // console.log(voluntario, "v")
        // if(!voluntario){
        //     throw new Error("voluntario nao existe")
        // }
        const avaliacoesAtuais =  await this.avaliacaoRepositorio.avaliacoesFeitasOng(dto.id, dto.tipo)
        
        console.log(avaliacoesAtuais, "insc a")
        return avaliacoesAtuais;
       } catch (error) {
           throw new Error("Erro ao buscar avaliacoes do voluntario")
       }
        
       
    }
}
