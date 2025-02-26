import CasoDeUso from "../../../@types/CasoDeUso";
import OngType from "../../../@types/OngType";
import Erros from "../../constants/Erros";
import Ong from "../../model/ong/Ong";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import Id from "../../shared/Id";
import OngRepositorioPort from "./OngRepositorioPort";



export class RegistrarOng implements CasoDeUso<OngType, void>{
    constructor(private ongDb: OngRepositorioPort, private incryptarSenha: SenhaCriptografada){}

    async executar(dto: OngType) {
        const senhaCrypto = this.incryptarSenha.criptarSenha(dto.senha!)
        senhaCrypto?? Erros.SENHA_INVALIDA
         const ong = {
            id: Id.gerarId(),
            nome:dto.nome,
            email: dto.email,
            tipo: dto.tipo,
            missao: dto.missao,
            cnpj: dto.cnpj,
            descricao: dto.descricao,
            visao: dto.visao,
            areaAtuacao: dto.areaAtuacao,
            endereco: dto.endereco,
            senha:senhaCrypto,
           
         }
         console.log(ong,"ong" )
        return await this.ongDb.registrar(ong)

        
    }


}