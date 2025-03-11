import CasoDeUso from "../../../@types/CasoDeUso";
import BuscarOngPorId from "../Ong/BuscarOngPorId";
import OngRepositorioPort from "../Ong/OngRepositorioPort";
import BuscarVagaPorId from "./BuscarVagaPorId";
import VagaRepositorioPort from "./VagaRepositorioPort";
export type deletarVagaDto = {
    id: string,
    idOng:string
}
export default class ExcluirVaga implements CasoDeUso<deletarVagaDto, any> {
    constructor(
        private vagaRepositorio: VagaRepositorioPort,
        private ongRepositorio: OngRepositorioPort
    ) { }
    async executar(dto: deletarVagaDto): Promise<any> {
        try {
            

            const listaDeVagas: any = await this.ongRepositorio.buscarVagasDeOng(dto.idOng)
            
            console.log(listaDeVagas, "lista de vagas")
            const vagaEstaListada = listaDeVagas!.vagas.some((vaga:any) => vaga.id === dto.id)
           console.log(vagaEstaListada, "vagalistada")
            if(vagaEstaListada ===  false) throw new Error("Id da vaga nao existe na ong correspondente")
      
            const buscarVaga = new BuscarVagaPorId(this.vagaRepositorio)
            const vagaExistente = await buscarVaga.executar(dto.id);
            
            if (!vagaExistente) {
                throw new Error("ID nao existe");
            }
            const vagaExcluida = await this.vagaRepositorio.excluir(dto.id, dto.idOng)
            if(!vagaExcluida) throw new Error("Erro ao excluir vaga")
             return vagaExcluida
        } catch (error) {

            throw new Error("Erro ao excluir vaga");
        }
    }
}