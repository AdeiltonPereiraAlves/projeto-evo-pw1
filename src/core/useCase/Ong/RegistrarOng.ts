import CasoDeUso from "../../../@types/CasoDeUso";
import OngType from "../../../@types/OngType";
import Ong from "../../model/ong/Ong";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import Id from "../../shared/Id";
import OngRepositorioPort from "./OngRepositorioPort";



export class RegistrarOng implements CasoDeUso<OngType, void>{
    constructor(private ongDb: OngRepositorioPort, private senhaCrypto: SenhaCriptografada){}
   async executar(dto: OngType): Promise<void> {
    const senhaHash = this.senhaCrypto.criptarSenha(dto.senha!)
         const ong =  new Ong(
            Id.gerarId(),
            dto.nome,
            dto.email,
            dto.tipo,
            dto.missao,
            dto.cnpj,
            dto.descricao,
            dto.visao,
            dto.areaAtuacao,
            dto.endereco,
            senhaHash,
            dto.imagem
         )
        return await this.ongDb.registrar(ong)

        
    }


}