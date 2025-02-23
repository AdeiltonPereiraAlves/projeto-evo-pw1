import CasoDeUso from "../../../@types/CasoDeUso";
import casoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import VoluntarioDb from "./VoluntarioDb";

import Id from "../../shared/Id";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";


export default class RegistrarVoluntario implements CasoDeUso<VoluntarioType,VoluntarioType>{

    constructor(private voluntarioDb: VoluntarioDb, private senhaCrypto: SenhaCriptografada){

    }
    async executar(dto: VoluntarioType){
        console.log(dto.imagem,"imagem no usecase")
        const senhaHash = this.senhaCrypto.criptarSenha(dto.senha!)
        // if(dto.tipo ==="VOLUNTARIO"){

            const voluntario = {
                id:Id.gerarId(),
                nome: dto.nome,
                email: dto.email,
                tipo:dto.tipo,
                contato:dto.contato,
                cpf:dto.cpf,
                habilidades: dto.habilidades,
                interesses: dto.interesses,
                disponibilidade: dto.disponibilidade,
                senha:senhaHash,
                imagem: dto.imagem
    
            }
            console.log(voluntario, "voluntario")
            const newVoluntario = await this.voluntarioDb.registrar(voluntario)
            return newVoluntario
        //  }
          throw new Error("Erro voluntario")
    }


}