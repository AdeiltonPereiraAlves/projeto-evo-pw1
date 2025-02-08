import CasoDeUso from "../../../@types/CasoDeUso";
import VagaType from "../../../@types/VagaType";
import OngRepositorioPort from "../Ong/OngRepositorioPort";
import BuscarVagaPorId from "./BuscarVagaPorId";
import VagaRepositorioPort from "./VagaRepositorioPort";
import BuscarOngPorId from "../Ong/BuscarOngPorId";
export default class EditarVaga implements CasoDeUso<any,VagaType>{
    constructor(
        private vagaRepositorio: VagaRepositorioPort,
        // private ongRepositorio: OngRepositorioPort
    ){}
    async executar(vaga: any): Promise<VagaType> {
        try {
            const buscarId = new BuscarVagaPorId(this.vagaRepositorio)
            // const buscarOngPorId = new BuscarOngPorId(this.ongRepositorio)
            const existeVaga = await buscarId.executar(vaga.id)
            

            if(!existeVaga){
                throw new Error("Erro id inexistente")
            }
            // const ongs = buscarOngPorId.executar(vaga.ongId)

            // const existeId = ongs.vaga.some((vagaItem) => vagaItem.id === vaga.id)

            if(vaga.id!== existeVaga.id){
                throw new Error("Id de ong nao existe")
            }
            if (vaga.ongId !== existeVaga.ongId) {
                throw new Error("Id da ONG inválido");
            }
            const vagaAtualizada = {
                ...existeVaga,
                ...vaga

            }
            const vagaAtualizadaResposta = await this.vagaRepositorio.editar(vagaAtualizada)
            return vagaAtualizadaResposta
        } catch (error) {
            
            throw new Error("Erro ao atualiza vaga");
        }
    }


}