import CasoDeUso from "../../../@types/CasoDeUso";
import OngType from "../../../@types/OngType";
import Ong from "../../model/ong/Ong";
import Id from "../../shared/Id";
import OngRepositorioPort from "./OngRepositorioPort";



export class RegistrarOng implements CasoDeUso<OngType, void>{
    constructor(private ongDb: OngRepositorioPort){}
    executar(dto: OngType): Promise<void> {
         const ong =  new Ong(
            Id.gerarId(),
            dto.nome,
            dto.email,
            dto.tipo,
            dto.cnpj,
            dto.descricao,
            dto.visao,
            dto.missao,
            dto.areaAtuacao,
            dto.endereco,
            dto.senha!,
            dto.imagem
         )
        this.ongDb.registrar(ong)

        throw new Error("Method not implemented.");
    }


}