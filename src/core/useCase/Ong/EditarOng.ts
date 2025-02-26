import AreaAtuacao from "../../../@types/AreaAtuacao";
import CasoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import VoluntarioDb from "../Voluntario/VoluntarioRepositorioPort";
import OngRepositorioPort from "./OngRepositorioPort";

export type editarOngDto = {
    id?: string,
    nome: string,
    email: string,
    imagem: string 
    cnpj:string
    descricao: string
    missao :string
    visao: string
    areaAtuacao: AreaAtuacao[]
    endereco: string
}

export default class EditarOng implements CasoDeUso<editarOngDto,any>{
    constructor(
        private ong:OngRepositorioPort
    ) {

    }
    async executar(dto: editarOngDto){
       const resposta = await this.ong.atualizar(dto)
       return resposta
    }
}