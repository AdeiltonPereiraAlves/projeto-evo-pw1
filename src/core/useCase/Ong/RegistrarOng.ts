import CasoDeUso from "../../../@types/CasoDeUso";
import OngSaidaType from "../../../@types/OngSaidaType";
import OngType from "../../../@types/OngType";
import Erros from "../../constants/Erros";
import Ong from "../../model/ong/Ong";
// import Ong from "../../model/ong/Ong";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import Id from "../../shared/Id";
import OngRepositorioPort from "./OngRepositorioPort";



export class RegistrarOng implements CasoDeUso<OngType, OngSaidaType>{
    constructor(private ongDb: OngRepositorioPort, private incryptarSenha: SenhaCriptografada){}

    async executar(dto: OngType) {
        const senhaCrypto = this.incryptarSenha.criptarSenha(dto.senha!)
        senhaCrypto?? Erros.SENHA_INVALIDA
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
              senhaCrypto,
         )
         console.log(ong,"ong" )
        return await this.ongDb.registrar(ong)

        
    }


}