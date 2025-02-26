import CasoDeUso from "../../../@types/CasoDeUso";
import Vagatype from "../../../@types/VagaType";
import VagaRepositorioPort from "./VagaRepositorioPort";
import Id from "../../shared/Id";

export default class RegistrarVaga implements CasoDeUso<Vagatype, any>{
    constructor(private vagaRepositorio: VagaRepositorioPort){}
    async executar(dto: Vagatype): Promise<any> {
        try {
            const vaga ={
                id: Id.gerarId(),
                titulo: dto.titulo,
                descricao: dto.descricao,
                requisitos:dto.requisitos,
                quantidade:dto.quantidade,
                status: dto.status,
                duracao: dto.duracao,
                localizacao: dto.localizacao,
                tipoTrabalho: dto.tipoTrabalho,
                latitude: dto.latitude,
                longitude: dto.longitude,
                ongId: dto.ongId,
            }
            console.log(vaga, "vaga caso de uso")
            const novaVaga = await this.vagaRepositorio.registrar(vaga)
            console.log(novaVaga, "nova vag")
            return novaVaga
        } catch (error: any) {
            console.log(error, "erro de log")
            throw new Error("Erro ao registrar vaga");
        }
    }
    
}