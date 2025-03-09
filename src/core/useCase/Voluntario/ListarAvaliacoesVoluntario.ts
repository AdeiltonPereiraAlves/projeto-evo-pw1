import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioRepositorio from "./VoluntarioRepositorioPort"
import InscricaoRepositorioPort from "../Inscricao/InscricaoRepositorio";
import BuscarPorId from "./BuscarPorId";

export default class ListarAvaliacoesVoluntario implements CasoDeUso<string, any> {
    constructor(private voluntarioRepositorio: VoluntarioRepositorio){}
     async executar(id:string){
          
       try {
        const buscarId = new BuscarPorId(this.voluntarioRepositorio)
        const voluntario = await buscarId.executar(id)

        console.log(voluntario, "v")
        if(!voluntario){
            throw new Error("voluntario nao existe")
        }
        const inscricoesAtuais =  await this.voluntarioRepositorio.listarAvaliacoesVoluntario(id)
        
        console.log(inscricoesAtuais, "insc a")
        return inscricoesAtuais;
       } catch (error) {
           throw new Error("Erro ao buscar avaliacoes do voluntario")
       }
        
       
    }
}
