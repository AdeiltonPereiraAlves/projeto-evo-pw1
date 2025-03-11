import CasoDeUso from "../../../@types/CasoDeUso";


import AvaliacaoRepositorioPort from "../Avaliacao/AvaliacaoRepositorioPort";
import { avaliacaoDto } from "../Voluntario/ListarAvaliacoesVoluntario";
export default class ListarAvaliacoesRecebidasOng implements CasoDeUso<avaliacaoDto, any> {
    constructor(private avaliacaoRepositorio: AvaliacaoRepositorioPort){}
     async executar(dto:avaliacaoDto){
          
       try {
        // const buscarId = new BuscarPorId(this.voluntarioRepositorio)
        // const voluntario = await buscarId.executar(id)

        // console.log(voluntario, "v")
        // if(!voluntario){
        //     throw new Error("voluntario nao existe")
        // }
        const avaliacoesAtuais =  await this.avaliacaoRepositorio.avaliacoesRecebidasVoluntario(dto.id, dto.tipo)
        
        console.log(avaliacoesAtuais, "insc a")
        return avaliacoesAtuais;
       } catch (error) {
           throw new Error("Erro ao buscar avaliacoes do voluntario")
       }
        
       
    }
}
