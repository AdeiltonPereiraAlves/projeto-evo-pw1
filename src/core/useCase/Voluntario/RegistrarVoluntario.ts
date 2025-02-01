import CasoDeUso from "../../../@types/CasoDeUso";
import casoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import VoluntarioDb from "../../portas/VoluntarioDb";
import Voluntario from "../../model/voluntario/Voluntario";
import Id from "../../shared/Id";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";


export default class RegistrarVoluntario implements CasoDeUso<VoluntarioType,Voluntario>{

    constructor(private voluntarioDb: UsuarioRepo, private senhaCrypto: SenhaCriptografada){

    }
    async executar(dto: VoluntarioType){
        console.log(dto.imagem,"imagem no usecase")
        const senhaHash = this.senhaCrypto.criptarSenha(dto.senha!)
        // if(dto.tipo ==="VOLUNTARIO"){

            const voluntario:Voluntario = new Voluntario(
                Id.gerarId(),
                dto.nome,
                dto.email,
                dto.tipo,
                dto.habilidades,
                dto.interesses,
                dto.disponibilidade,
                senhaHash,
                dto.imagem
    
            )
            console.log(voluntario, "voluntario")
            const newVoluntario = await this.voluntarioDb.registrar(voluntario)
            return newVoluntario
        //  }
          throw new Error("Erro voluntario")
    }


}