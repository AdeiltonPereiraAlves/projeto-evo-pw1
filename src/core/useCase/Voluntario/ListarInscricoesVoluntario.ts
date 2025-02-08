import CasoDeUso from "../../../@types/CasoDeUso";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "../../portas/VoluntarioDb";
import InscricaoRepositorioPort from "../inscricoes/IncricoesRepositorioPort";

export default class ListarInscricoesVoluntario implements CasoDeUso<string, any> {
    constructor(private voluntarioDb: VoluntarioDb, private inscricaoRepositorio: InscricaoRepositorioPort){}
     async executar(id:string){
          
       try {
        const voluntario = await this.voluntarioDb.buscarVoluntarioPorId(id)
        console.log(voluntario, "v")
        if(!voluntario){
            throw new Error("voluntario nao existe")
        }
        const inscricoesAtuais =  await this.inscricaoRepositorio.listaInscricoesDeVoluntario(id)
        
        console.log(inscricoesAtuais, "insc a")
        return inscricoesAtuais;
       } catch (error) {
           throw new Error("Erro ao buscar inscricoes do voluntario")
       }
        
       
    }
}

