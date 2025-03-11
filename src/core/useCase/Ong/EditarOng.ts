import AreaAtuacao from "../../../@types/AreaAtuacao";
import CasoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import VoluntarioDb from "../Voluntario/VoluntarioRepositorioPort";
import BuscarOngPorId from "./BuscarOngPorId";
import OngRepositorioPort from "./OngRepositorioPort";

export type editarOngDto = {
    id?: string,
    nome: string,
    descricao: string
    missao: string
    visao: string
    areaAtuacao: AreaAtuacao[]
    endereco: string
}

export default class EditarOng implements CasoDeUso<editarOngDto, any> {
    constructor(
        private ong: OngRepositorioPort
    ) {

    }
    async executar(dto: editarOngDto) {
        const buscarOng = new BuscarOngPorId(this.ong)
        const ong = await buscarOng.executar(dto.id!)

        if (!ong) throw new Error("Ong não existe")

        const ongEditar = {
            id: ong.id!,
            nome: dto.nome ?? ong.nome, // Mantém o valor atual se não for fornecido
            descricao: dto.descricao ?? ong.descricao,
            missao: dto.missao ?? ong.missao,
            visao: dto.visao ?? ong.visao,
            areaAtuacao: dto.areaAtuacao ?? ong.areaAtuacao,
            endereco: dto.endereco ?? ong.endereco,

        }
        const resposta = await this.ong.atualizar(ongEditar)
        
        return resposta
    }
}