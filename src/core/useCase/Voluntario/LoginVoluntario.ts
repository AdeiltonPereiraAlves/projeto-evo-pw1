import CasoDeUso from "../../../@types/CasoDeUso";
import jwtPort from "../../portas/JwtPort";
import SenhaCriptografada from "../../portas/SenhaCriptografada";
import UsuarioRepo from "../../portas/usuario/UsuarioRepo";

export type Dto = { email: string; senha: string };

export default class LoginVoluntario implements CasoDeUso<Dto, any> {
  constructor(
    private voluntarioDb: UsuarioRepo,
    private provedorToken: jwtPort,
    private bcrypt: SenhaCriptografada
  ) {}

  async executar(dto: Dto) {
    console.log("Chegou no caso de uso");

    // Busca o usuário pelo e-mail
    const usuarioExistente = await this.voluntarioDb.buscarPorEmail(dto.email);
    console.log(usuarioExistente, "Usuário existente");

    if (!usuarioExistente) {
      throw new Error("Usuário não existe");
    }

    // Compara a senha fornecida com a armazenada
    const senhaCrypto = usuarioExistente.senha;
    console.log(dto.senha, senhaCrypto);

    const mesmaSenha = await this.bcrypt.compararSenha(dto.senha, senhaCrypto);
    console.log(mesmaSenha, "Senhas no caso de uso");

    if (!mesmaSenha) {
      throw new Error("Senhas diferentes");
    }

    // Remove a senha do retorno do usuário
    const { senha, ...usuarioSemSenha } = usuarioExistente.voluntario;

    console.log(usuarioExistente.nome, "usuarionome")

    // Gera o token JWT
    const token = this.provedorToken.gerar({
      id: usuarioExistente.id,
      nome: usuarioExistente.nome,
      email: usuarioExistente.email,
      tipo: usuarioExistente.tipo,
    });

    // Retorna o usuário e o token
    return {
      usuario: usuarioSemSenha,
      token,
    };
  }
}
