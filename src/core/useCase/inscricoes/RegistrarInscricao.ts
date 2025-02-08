import { Result } from "express-validator";
import CasoDeUso from "../../../@types/CasoDeUso";
import Id from "../../shared/Id";
import InscricaoRepositorioPort from "./IncricoesRepositorioPort";
import BuscarVagaPorId from "../vaga/BuscarVagaPorId";
import VagaRepositorioPort from "../vaga/VagaRepositorioPort";
import VoluntarioDb from "../../portas/VoluntarioDb";
import BuscarVoluntarioPorId from "../Voluntario/BuscarVoluntarioPorId";

export type inscricaoDto = {
    id?:string
    status: string
    resultado:string
    vagaId?:string
    voluntarioId?:string
}


export default class RegistrarInscricao implements CasoDeUso<inscricaoDto, any>{
    constructor(private inscricaoRepositorio: InscricaoRepositorioPort, private vagaRespositorio: VagaRepositorioPort, private VoluntarioRepositorio: VoluntarioDb){}
    async executar(dto: inscricaoDto): Promise<any> {

        try {
            const buscarVagaId = new BuscarVagaPorId(this.vagaRespositorio)
            const vaga = await  buscarVagaId.executar(dto.vagaId!)
            
            console.log(vaga, "vaga e v")
            if(vaga.id!== dto.vagaId){
                throw new Error("error id de vaga não encontrado")
            }
            const buscarVoluntarioId = new BuscarVoluntarioPorId(this.VoluntarioRepositorio)
            const voluntario = await buscarVoluntarioId.executar(dto.voluntarioId!)

            console.log(voluntario, "voluntario")
           
            if(voluntario.id!== dto.voluntarioId){
                
                throw new Error("error id de voluntario não encontrado")
            }
            const inscricao = {
                id: Id.gerarId(),
                status: dto.status,
                resultado: dto.resultado,
                vagaId: vaga.id,
                voluntarioId: voluntario.id
                
            }
            const novaInscricao = await this.inscricaoRepositorio.registrar(inscricao)
            
            console.log(novaInscricao,"nova inscricao")
            return novaInscricao
        
        } catch (error) {
            console.log(error,"erro no c")
            throw new Error("Method not implemented c.");
        }
    }
   
}