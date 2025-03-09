import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import RegistrarVoluntario from "./core/useCase/Voluntario/RegistrarVoluntario";
import VoluntarioRepositorio from "./adptadores/db/voluntario/VoluntarioRepositorio";
import RegistrarVoluntarioController from "./controllers/voluntario/RegistrarVoluntarioController";
import ValidateReq from "./adptadores/middleware/handleValidation";
import middlewareValidator from "./adptadores/middleware/handleValidation";
import Bcrypt from "./adptadores/auth/BcryptAdapter";
import LoginVoluntarioController from "./controllers/usuario/LoginUsuarioController";
import LoginVoluntario from "./core/useCase/auth/LonginUsuario";
import JwtAdapter from "./adptadores/auth/JwtAdapter";
import buscarVoluntariosControllers from "./controllers/voluntario/BuscarVoluntariosControllers";
import UserAuthentication from "./adptadores/middleware/UserAuthentication";
import BuscarVoluntarios from "./core/useCase/Voluntario/BuscarVoluntarios";
import imagemUpload from "./adptadores/middleware/ImagemUpload";
import EditarFotoController from "./controllers/voluntario/EditarFotoController";
import EditarFotoPerfil from "./core/useCase/Voluntario/EditarFotoPerfil";
import ExcluirVoluntario from "./core/useCase/Voluntario/ExcluirVoluntario";
import ExcluirVoluntarioController from "./controllers/voluntario/ExcluirVoluntarioController";
import EditarVoluntario from "./core/useCase/Voluntario/EditarVoluntario";
import EditarVoluntarioController from "./controllers/voluntario/EditarVoluntarioController";
import UsuarioAutorizacao from "./adptadores/middleware/UsuarioAutorizacao"
import UsuarioRepositorio from "./adptadores/db/usuario/UsuarioRepositorio";


//
import UsuarioRepo from "./core/portas/usuario/UsuarioRepo";
import { RegistrarOng } from "./core/useCase/Ong/RegistrarOng";
import { OngRepositorio } from "./adptadores/db/ong/OngRepositorio";
import RegistrarOngController from "./controllers/ong/RegistrarOngController";
import ExcluirOngController from "./controllers/ong/ExcluirOngController";
import ExcluirOng from "./core/useCase/Ong/ExcluirOng";
import BuscarOngs from "./core/useCase/Ong/BuscarOngs";
import BuscarOngController from "./controllers/ong/BuscarOngs";
import LonginUsuario from "./core/useCase/auth/LonginUsuario";
import LoginUsuarioController from "./controllers/usuario/LoginUsuarioController";
import BuscarUsuario from "./adptadores/db/usuario/UsuarioAutenticao";
import UsuarioAutenticao from "./adptadores/db/usuario/UsuarioAutenticao";

import EditarOng from "./core/useCase/Ong/EditarOng";
import EditarOngController from "./controllers/ong/EditarOngController";
import VagaRepositorio from "./adptadores/db/vaga/VagaRepositorio";
import RegistrarVaga from "./core/useCase/vaga/RegistrarVaga";
import RegistrarVagaController from "./controllers/vaga/RegistrarVagaController";
import ListarVagas from "./core/useCase/vaga/ListarVagas";
import ListarVagasController from "./controllers/vaga/ListarVagasController";
import ExcluirVaga from "./core/useCase/vaga/ExcluirVaga";
import ExcluirVagaController from "./controllers/vaga/ExcluirVagaController";
import EditarVaga from "./core/useCase/vaga/EditarVaga";
import EditarVagaController from "./controllers/vaga/EditarVagaController";
import BuscarVagaPorId from "./core/useCase/vaga/BuscarVagaPorId";
import BuscarVagaPorIdController from "./controllers/vaga/BuscarVagaPorIdController";
import filtrarVagas from "./core/useCase/vaga/FiltrarVagas";
import FiltrarVagaController from "./controllers/vaga/FiltrarVagasController";


// Novos imports para Inscricao e Avaliacao
// Repositórios
import InscricaoRepositorio from "./adptadores/db/inscricao/InscricaoRepositorio";
import AvaliacaoRepositorio from "./adptadores/db/avaliacao/AvaliacaoRepositorio";

// Casos de Uso para Inscricao
import RegistrarInscricao from "./core/useCase/Inscricao/RegistrarInscricao";
import BuscarInscricaoPorId from "./core/useCase/Inscricao/BuscarInscricaoPorId";
import AtualizarInscricao from "./core/useCase/Inscricao/AtualizarInscricao";
import ExcluirInscricao from "./core/useCase/Inscricao/ExcluirInscricao";

// Casos de Uso para Avaliacao
import RegistrarAvaliacao from "./core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import BuscarAvaliacaoPorId from "./core/useCase/Avaliacao/BuscarAvaliacaoPorId";
import AtualizarAvaliacao from "./core/useCase/Avaliacao/AtualizarAvaliacao";
import ExcluirAvaliacao from "./core/useCase/Avaliacao/ExcluirAvaliacao";

// Controladores
import InscricaoController from "./controllers/inscricao/InscricaoController";
import AvaliacaoController from "./controllers/avaliacao/AvaliacaoController";
import ListarInscricoesVoluntarioControllers from "./controllers/voluntario/ListarInscricoesVoluntarioController";
import ListarInscricoesVoluntario from "./core/useCase/Voluntario/ListarInscricoesVoluntario";
import { validarRegistroVoluntario } from "./adptadores/middleware/validarCampos/validarRegistroVoluntario";
import validarRegistroOngs from "./adptadores/middleware/validarCampos/validarRegistroOng"
import validarEditarOng from "./adptadores/middleware/validarCampos/validaraEditarOng";
import { validarEditarVoluntario } from "./adptadores/middleware/validarCampos/validarEditarVoluntario";
import ListarVagasOng from "./core/useCase/Ong/ListarVagasOng";
import ListarVagasOngController from "./controllers/ong/ListarVagasOngController";
import AprovarVoluntario from "./core/useCase/Ong/AprovarVoluntario";
import AprovarVoluntarioController from "./controllers/ong/AprovarVoluntarioController";
import MudarStatusVaga from "./core/useCase/Ong/MudarStatusVaga";
import MudarStatusVagaController from "./controllers/ong/MudarStatusVagaController";
import RegistrarAvaliacaoVoluntario from "./core/useCase/Avaliacao/RegistrarAvaliacaoVoluntario";
import RegistrarAvalicaoVoluntarioController from "./controllers/avaliacao/RegistrarAvalicaoVoluntarioController";
import ListarAvaliacoesVoluntario from "./core/useCase/Voluntario/ListarAvaliacoesVoluntario";
import ListarAvaliacoesVoluntarioController from "./controllers/voluntario/ListarAvalicaoFeitasVoluntarioController";
import RegistrarAvaliacaoOng from "./core/useCase/Avaliacao/RegistrarAvaliacaoOng";
import RegistrarAvaliacaoOngController from "./controllers/avaliacao/RegistrarAvaliacaoOngController";
import ListarAvaliacoesRecebidas from "./core/useCase/Voluntario/ListarAvaliacoesRecebidas";
import ListarAvaliacoesRecebidasController from "./controllers/voluntario/ListarAvaliacoesRecebidasController";


const app = express();
const port = process.env.PORT
const secret = process.env.JWTSECRET
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, () => {
    console.log("servidor rodando"+port)
} )


const senhaCrypto = new Bcrypt()
const voluntarioRepositorio = new VoluntarioRepositorio();
const registrarVoluntario = new RegistrarVoluntario(voluntarioRepositorio,senhaCrypto)
const middlewareValidador = middlewareValidator
const provedorToken = new  JwtAdapter(secret!)

console.log(provedorToken,"provedor token")
// const usuarioDb = new UsuarioRepositorio() //usuariodb


//--------------------------------VOLUNTARIO------------------------------------------------------------------------------------------------------
const ongRepositorio = new OngRepositorio()
const loginVoluntario = new LonginUsuario(voluntarioRepositorio,ongRepositorio, provedorToken  ,senhaCrypto)

const middlewareImagem = imagemUpload.single("imagem")
new RegistrarVoluntarioController(app,registrarVoluntario,validarRegistroVoluntario(), middlewareValidador,middlewareImagem )
new LoginUsuarioController(app,loginVoluntario)

const usuarioAutenticaoDb = new UsuarioAutenticao() // altentica o usuario dinamicamente retornando dados para o payload de uma ong ou voluntario
const buscarVoluntarios = new BuscarVoluntarios(voluntarioRepositorio)
new buscarVoluntariosControllers(app,buscarVoluntarios,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]) )
// UsuarioAutorizacao(["VOLUNTARIO"]) 
//UserAuthentication(voluntarioRepositorio, provedorToken)

// atualiza foto perfil voluntario

const editarFoto = new EditarFotoPerfil(voluntarioRepositorio)
new EditarFotoController(app,editarFoto,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), middlewareImagem, UsuarioAutorizacao(["VOLUNTARIO"]))

// //excluir voluntario

const excluirVoluntario = new ExcluirVoluntario(voluntarioRepositorio)
new ExcluirVoluntarioController(app, excluirVoluntario,middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),middlewareImagem, UsuarioAutorizacao(["VOLUNTARIO"]))
//UserAuthentication(voluntarioRepositorio, provedorToken),


// //editar voluntario

const editarVoluntario = new EditarVoluntario(voluntarioRepositorio)
//validarEditarVoluntario(), 
new EditarVoluntarioController(app,editarVoluntario, middlewareValidador,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),middlewareImagem, UsuarioAutorizacao(["VOLUNTARIO"]))

//listar inscricoes

const listarInscricoes = new ListarInscricoesVoluntario(voluntarioRepositorio)

new ListarInscricoesVoluntarioControllers(app, listarInscricoes, UserAuthentication(voluntarioRepositorio, ongRepositorio,provedorToken))
// //------------------------------------------------ONG----------------------------------------------------------------------------------------------------
// // rotas para ong

//registrar
const registrarOng = new RegistrarOng(ongRepositorio,senhaCrypto )

new RegistrarOngController(app, registrarOng,validarRegistroOngs(), middlewareValidador)
//login
const login = new LonginUsuario(voluntarioRepositorio,ongRepositorio,provedorToken  ,senhaCrypto )
new LoginUsuarioController(app, login, )
// // //excluir
const excluirOng = new ExcluirOng(ongRepositorio)
new ExcluirOngController(app, excluirOng, middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"]))

// //buscar ongs

const buscarOngs = new BuscarOngs(ongRepositorio)
new BuscarOngController(app, buscarOngs,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]))

// // editar foto ong
// const ongRepo = new UsuarioRepositorio("ONG","//")
// const editarFotoOng = new EditarFotoPerfilOng(ongRepo)

// new EditarFotoPerfilController(app, editarFotoOng, UserAuthentication(usuarioAutenticaoDb, provedorToken),  middlewareImagem,UsuarioAutorizacao(["ONG"]))


//editar ong

const editar = new EditarOng(ongRepositorio)
new EditarOngController(app,editar,validarEditarOng(),middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),)




// //--------------------------------------------------VAGA-----------------------------------------------------------------------------------------
// // registrar vaga

const vagaRepositorio = new VagaRepositorio()
const registrarVaga = new RegistrarVaga(vagaRepositorio)

new RegistrarVagaController(app, registrarVaga, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["ONG"]) )

// // buscar vagas

const listarVagas = new ListarVagas(vagaRepositorio)
new ListarVagasController(app, listarVagas,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]))

// //listar vaga por id

const buscarVagaPorId = new BuscarVagaPorId(vagaRepositorio)
new BuscarVagaPorIdController(app, buscarVagaPorId, UserAuthentication(voluntarioRepositorio, ongRepositorio,provedorToken), UsuarioAutorizacao(["ONG","VOLUNTARIO"]))

// listar vagas de uma ong
const listarVagaDeUmaOng = new ListarVagasOng(ongRepositorio)
new ListarVagasOngController(app, listarVagaDeUmaOng, UserAuthentication(voluntarioRepositorio,ongRepositorio,provedorToken), UsuarioAutorizacao(["ONG","VOLUNTARIO"]))

//aprovar voluntario 
const aprovarVoluntario = new AprovarVoluntario(ongRepositorio)
new AprovarVoluntarioController(app,aprovarVoluntario , UserAuthentication(voluntarioRepositorio, ongRepositorio,provedorToken))

// mudar status da vaga
const mudarStatus = new MudarStatusVaga(ongRepositorio)
new MudarStatusVagaController(app, mudarStatus, UserAuthentication(voluntarioRepositorio, ongRepositorio,provedorToken))

// //deletar vaga

const excluirVaga = new ExcluirVaga(vagaRepositorio, ongRepositorio)
new ExcluirVagaController(app, excluirVaga, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken))

// //atualizar vaga 
const editarVaga = new EditarVaga(vagaRepositorio)
new EditarVagaController(app, editarVaga, UserAuthentication(voluntarioRepositorio, ongRepositorio,provedorToken), UsuarioAutorizacao(["ONG"]), middlewareValidador)

// // filtrar vaga 

const filtrarVaga = new filtrarVagas(vagaRepositorio)
new FiltrarVagaController(app, filtrarVaga)





//--------------------------------------------------INSCRICAO E AVALIACAO-----------------------------------------------------------------------------------------
// Inscricao
const inscricaoRepositorio = new InscricaoRepositorio();
const registrarInscricao = new RegistrarInscricao(inscricaoRepositorio, vagaRepositorio, voluntarioRepositorio);
const buscarInscricaoPorId = new BuscarInscricaoPorId(inscricaoRepositorio);
const atualizarInscricao = new AtualizarInscricao(inscricaoRepositorio);
const excluirInscricao = new ExcluirInscricao(inscricaoRepositorio,voluntarioRepositorio);

new InscricaoController(
  app,
  registrarInscricao,
  buscarInscricaoPorId,
  atualizarInscricao,
  excluirInscricao,
  UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),
  UsuarioAutorizacao(["VOLUNTARIO", "ONG"])
);

// Avaliacao
const avaliacaoRepositorio = new AvaliacaoRepositorio();
const registrarAvaliacao = new RegistrarAvaliacao(avaliacaoRepositorio);
const buscarAvaliacaoPorId = new BuscarAvaliacaoPorId(avaliacaoRepositorio);
const atualizarAvaliacao = new AtualizarAvaliacao(avaliacaoRepositorio);
const excluirAvaliacao = new ExcluirAvaliacao(avaliacaoRepositorio);

//
const registrarAvalicaoVoluntario = new RegistrarAvaliacaoVoluntario(avaliacaoRepositorio)
new RegistrarAvalicaoVoluntarioController(app, registrarAvalicaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken))

const registrarAvaliacaoOng = new RegistrarAvaliacaoOng(avaliacaoRepositorio)
new RegistrarAvaliacaoOngController(app, registrarAvaliacaoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"]) )

const listarAvalicaoVoluntario = new ListarAvaliacoesVoluntario(avaliacaoRepositorio)
new ListarAvaliacoesVoluntarioController(app, listarAvalicaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO"]) )

const listarAvaliacoesRecebidasVoluntario = new ListarAvaliacoesRecebidas(avaliacaoRepositorio)
new ListarAvaliacoesRecebidasController(app, listarAvaliacoesRecebidasVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO"]) )

new AvaliacaoController(
  app,
  registrarAvaliacao,
  buscarAvaliacaoPorId,
  atualizarAvaliacao,
  excluirAvaliacao,
  UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),
  UsuarioAutorizacao(["VOLUNTARIO", "ONG"])
);