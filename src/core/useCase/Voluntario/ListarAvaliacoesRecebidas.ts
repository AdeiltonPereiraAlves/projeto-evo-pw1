import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioRepositorio from "./VoluntarioRepositorioPort"
import InscricaoRepositorioPort from "../Inscricao/InscricaoRepositorio";
import BuscarPorId from "./BuscarPorId";
import AvaliacaoRepositorioPort from "../Avaliacao/AvaliacaoRepositorioPort";

export default class ListarAvaliacoesRecebidas implements CasoDeUso<string, any> {
    constructor(private avaliacaoRepositorio: AvaliacaoRepositorioPort){}
     async executar(id:string){
          
       try {
        // const buscarId = new BuscarPorId(this.voluntarioRepositorio)
        // const voluntario = await buscarId.executar(id)

        // console.log(voluntario, "v")
        // if(!voluntario){
        //     throw new Error("voluntario nao existe")
        // }
        const avaliacoesAtuais =  await this.avaliacaoRepositorio.avaliacoesRecebidasVoluntario(id)
        
        console.log(avaliacoesAtuais, "insc a")
        return avaliacoesAtuais;
       } catch (error) {
           throw new Error("Erro ao buscar avaliacoes do voluntario")
       }
        
       
    }
}
