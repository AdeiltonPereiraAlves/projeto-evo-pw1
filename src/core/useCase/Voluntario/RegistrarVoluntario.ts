import CasoDeUso from "../../../@types/CasoDeUso";
import casoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import Tipo from "../../../@types/Tipo";
import voluntarioRepositorio from "./VoluntarioRepositorioPort";

import Id from "../../shared/Id";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import VoluntarioType from "../../../@types/VoluntarioType";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import Voluntario from "../../model/voluntario/Voluntario";

export default class RegistrarVoluntario
  implements CasoDeUso<VoluntarioType, Voluntario>
{
  constructor(
    private voluntarioRepositorio: voluntarioRepositorio,
    private senhaCrypto: SenhaCriptografada
  ) {}
  async executar(dto: VoluntarioType) {
   
    const senhaHash = this.senhaCrypto.criptarSenha(dto.senha!);

    const voluntario: Voluntario = new Voluntario(
        Id.gerarId(),
        dto.nome,
        dto.email,
        dto.imagem,
        dto.tipo,
        dto.contato,
        dto.cpf,
        dto.habilidades,
        dto.interesses,
        dto.disponibilidade,
        senhaHash,
    );
    console.log(voluntario, "voluntario");
    const newVoluntario = await this.voluntarioRepositorio.registrar(
      voluntario
    );
    return newVoluntario;
  }
}
