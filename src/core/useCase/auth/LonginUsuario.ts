import CasoDeUso from "../../../@types/CasoDeUso";
import jwtPort from "../../portas/JwtPort";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";
import VoluntarioDb from "../../portas/VoluntarioDb";
import OngRepositorioPort from "../Ong/OngRepositorioPort";
import BuscarPorEmail from "../Voluntario/BuscarPorEmail";
import BuscarPorEmailOng from "../Ong/BuscarPorEmail"
export type Dto = { email: string; senha: string };

export default class LonginUsuario implements CasoDeUso<Dto, Object> {
  constructor(
    private usuarioDb: VoluntarioDb,
    private ongDb: OngRepositorioPort,
    private provedorToken: jwtPort,
    private bcrypt: SenhaCriptografada
  ) {}

  async executar(dto: Dto) {
    console.log("Chegou no caso de uso");

    // Busca o usuário pelo e-mail
    const buscarEmail = new BuscarPorEmail(this.usuarioDb)
    const usuarioExistente = await buscarEmail.executar(dto.email);

    console.log(buscarEmail,"buscar email")
    if(usuarioExistente){
      console.log(usuarioExistente, "Usuário existente");
      if (!usuarioExistente) {
        throw new Error("Usuário não existe");
      }
      console.log(buscarEmail,"buscar email")


    // Compara a senha fornecida com a armazenada
    const senhaCrypto = usuarioExistente.senha;
    console.log(dto.senha, senhaCrypto);

    const mesmaSenha = await this.bcrypt.compararSenha(dto.senha, senhaCrypto);
    console.log(mesmaSenha, "Senhas no caso de uso");

    if (!mesmaSenha) {
      throw new Error("Senhas diferentes");
    }

    // Remove a senha do retorno do usuário
    const { senha, ...usuarioSemSenha } = usuarioExistente;

    console.log(usuarioExistente.nome, "usuarionome")

    // Gera o token JWT
    const token = this.provedorToken.gerar({
      id: usuarioExistente.id,
      nome: usuarioExistente.nome,
      email: usuarioExistente.email,
      tipo: usuarioExistente.tipo,
    });


    return {
      usuario: usuarioSemSenha,
      token,
    };
    }
    else{
      console.log("chegou no else")
      const buscarEmail= new BuscarPorEmailOng(this.ongDb)
      const usuarioExistente = await buscarEmail.executar(dto.email);
      console.log(usuarioExistente, "Usuário existente");
      if (!usuarioExistente) {
        throw new Error("Usuário não existe");
      }
      console.log(buscarEmail,"buscar email")


    // Compara a senha fornecida com a armazenada
    const senhaCrypto = usuarioExistente.senha;
    console.log(dto.senha, senhaCrypto);

    const mesmaSenha = await this.bcrypt.compararSenha(dto.senha, senhaCrypto);
    console.log(mesmaSenha, "Senhas no caso de uso");

    if (!mesmaSenha) {
      throw new Error("Senhas diferentes");
    }

    // Remove a senha do retorno do usuário
    const { senha, ...usuarioSemSenha } = usuarioExistente;

    console.log(usuarioExistente.nome, "usuarionome")

    // Gera o token JWT
    const token = this.provedorToken.gerar({
      id: usuarioExistente.id,
      nome: usuarioExistente.nome,
      email: usuarioExistente.email,
      tipo: usuarioExistente.tipo,
    });


    return {
      usuario: usuarioSemSenha,
      token,
    };
    }
    
    // Retorna o usuário e o token
  }
}
