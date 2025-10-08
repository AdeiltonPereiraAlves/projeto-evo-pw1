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


import { RegistrarOng } from "./core/useCase/Ong/RegistrarOng";
import { OngRepositorio } from "./adptadores/db/ong/OngRepositorio";
import RegistrarOngController from "./controllers/ong/RegistrarOngController";
import ExcluirOngController from "./controllers/ong/ExcluirOngController";
import ExcluirOng from "./core/useCase/Ong/ExcluirOng";
import BuscarOngs from "./core/useCase/Ong/BuscarOngs";
import BuscarOngController from "./controllers/ong/BuscarOngs";
import LonginUsuario from "./core/useCase/auth/LonginUsuario";
import LoginUsuarioController from "./controllers/usuario/LoginUsuarioController";


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
import ExcluirAvaliacaoVoluntario from "./core/useCase/Avaliacao/ExcluirAvaliacaoVoluntario";
import ExcluirAvaliacaoVoluntarioController from "./controllers/avaliacao/ExcluirAvaliacaoVoluntarioController";
import AtualizaarAvalicaoVoluntarioController from "./controllers/avaliacao/AtualizarAvaliacaoController";
import ListarAvaliacoesRecebidasOng from "./core/useCase/Ong/ListarAvaliacoesRecebidasOng";
import ListarAvaliacoesRecebidasOngController from "./controllers/ong/ListarAvaliacoesRecebidasOngController";
import ListarAvaliacoesFeitasOng from "./core/useCase/Ong/ListarAvaliacoesFeitasOng";
import ListarAvaliacoesOngController from "./controllers/ong/ListarAvalicaoFeitasOngController";
import ListarAvaliacoesFeitasOngController from "./controllers/ong/ListarAvalicaoFeitasOngController";
import { validarRegistroVaga } from "./adptadores/middleware/validarCampos/validarRegistroVaga";
import { validarRegistroAvaliacao } from "./adptadores/middleware/validarCampos/validarRegistroAvaliacao";
import AtualizaarAvalicaoController from "./controllers/avaliacao/AtualizarAvaliacaoController";
import BuscarPorId from "./core/useCase/Voluntario/BuscarPorId";
import ExcluirAvaliacaoOng from "./core/useCase/Ong/ExcluirAvaliacaoOng";
import ExcluirAvaliacaoOngController from "./controllers/avaliacao/ExcluirAvaliacaoOngController";
import AtualizarAvaliacaoOng from "./core/useCase/Avaliacao/AtualizarAvaliacaoOng";
import AtualizaarAvalicaoOngController from "./controllers/avaliacao/AtualizarAvaliacaoOngController";
import EditarFotoOngController from "./controllers/ong/EditarFotoOngController";
import EditarFotoOng from "./core/useCase/Ong/EditarFotoOng";
import path from "path";
import cors from "cors"
import BuscarStatus from "./core/useCase/Inscricao/BuscarStatus";
import buscarVoluntarioPorIdControllers from "./controllers/voluntario/BuscarVoluntarioPorIdController";

const app = express();
const port = process.env.PORT
const secret = process.env.JWTSECRET
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// app.listen(port, () => {
//     console.log("servidor rodando"+port)
// } )
app.listen(3001, '0.0.0.0', () => console.log("Servidor rodando"));


const senhaCrypto = new Bcrypt()
const voluntarioRepositorio = new VoluntarioRepositorio();
const registrarVoluntario = new RegistrarVoluntario(voluntarioRepositorio,senhaCrypto)
const middlewareValidador = middlewareValidator
const provedorToken = new  JwtAdapter(secret!)

console.log(provedorToken,"provedor token")
// const usuarioDb = new UsuarioRepositorio() //usuariodb
// backend/index.js
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, "../public")));

//--------------------------------VOLUNTARIO------------------------------------------------------------------------------------------------------
const ongRepositorio = new OngRepositorio()
const loginVoluntario = new LonginUsuario(voluntarioRepositorio,ongRepositorio, provedorToken  ,senhaCrypto)

const middlewareImagem = imagemUpload.single("imagem")
new RegistrarVoluntarioController(app,registrarVoluntario,loginVoluntario,validarRegistroVoluntario(), middlewareValidador,middlewareImagem )
new LoginUsuarioController(app,loginVoluntario)



// buscar vonluntario por id (perfil)
const buscarVoluntarioPorId =  new BuscarPorId(voluntarioRepositorio)
new buscarVoluntarioPorIdControllers(app,buscarVoluntarioPorId,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]) )

const buscarVoluntarios = new BuscarVoluntarios(voluntarioRepositorio)
new buscarVoluntariosControllers(app,buscarVoluntarios,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]) )


// atualiza foto perfil voluntario

const editarFoto = new EditarFotoPerfil(voluntarioRepositorio)
new EditarFotoController(app,editarFoto,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), middlewareImagem, UsuarioAutorizacao(["VOLUNTARIO"]))

// //excluir voluntario

const excluirVoluntario = new ExcluirVoluntario(voluntarioRepositorio)
const buscarPorId =  new BuscarPorId(voluntarioRepositorio)
new ExcluirVoluntarioController(app, excluirVoluntario,buscarPorId,middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),middlewareImagem, UsuarioAutorizacao(["VOLUNTARIO"]))
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
const login = new LonginUsuario(voluntarioRepositorio,ongRepositorio,provedorToken  ,senhaCrypto )
new RegistrarOngController(app, registrarOng,login,validarRegistroOngs(), middlewareValidador)
//login
new LoginUsuarioController(app, login, )
// // //excluir
const excluirOng = new ExcluirOng(ongRepositorio)
new ExcluirOngController(app, excluirOng, middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"]))

// //buscar ongs

const buscarOngs = new BuscarOngs(ongRepositorio)
new BuscarOngController(app, buscarOngs,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]))

// // editar foto ong
const editarFotoOng = new EditarFotoOng(ongRepositorio)
new EditarFotoOngController(app,editarFotoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), middlewareImagem, UsuarioAutorizacao(["ONG"]))


//editar ong

const editar = new EditarOng(ongRepositorio)
new EditarOngController(app,editar,validarEditarOng(),middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),)




// //--------------------------------------------------VAGA-----------------------------------------------------------------------------------------
// // registrar vaga

const vagaRepositorio = new VagaRepositorio()
const registrarVaga = new RegistrarVaga(vagaRepositorio)

new RegistrarVagaController(app, registrarVaga, validarRegistroVaga(), middlewareValidador, UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),UsuarioAutorizacao(["ONG"]) )

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
const buscarStatus = new BuscarStatus(inscricaoRepositorio);

new InscricaoController(
  app,
  registrarInscricao,
  buscarInscricaoPorId,
  atualizarInscricao,
  excluirInscricao,
  buscarStatus,
  UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken),
  UsuarioAutorizacao(["VOLUNTARIO", "ONG"])
);

// Avaliacao
const avaliacaoRepositorio = new AvaliacaoRepositorio();



//----------------------avalicao voluntario------------------------------
const registrarAvalicaoVoluntario = new RegistrarAvaliacaoVoluntario(avaliacaoRepositorio)
new RegistrarAvalicaoVoluntarioController(app, registrarAvalicaoVoluntario,validarRegistroAvaliacao(), middlewareValidador,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken))

const registrarAvaliacaoOng = new RegistrarAvaliacaoOng(avaliacaoRepositorio)
new RegistrarAvaliacaoOngController(app, registrarAvaliacaoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"]) )

const listarAvalicaoVoluntario = new ListarAvaliacoesVoluntario(avaliacaoRepositorio)
new ListarAvaliacoesVoluntarioController(app, listarAvalicaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO"]) )

const listarAvaliacoesRecebidasVoluntario = new ListarAvaliacoesRecebidas(avaliacaoRepositorio)
new ListarAvaliacoesRecebidasController(app, listarAvaliacoesRecebidasVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO"]) )

// atualizar avalicao de um voluntario
const atualizaAvalicaoVoluntario = new AtualizarAvaliacao(avaliacaoRepositorio)
new AtualizaarAvalicaoController(app, atualizaAvalicaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO","ONG"] ))

// const atualizaAvalicaoVoluntario = new AtualizarAvaliacao(avaliacaoRepositorio)
// new AtualizaarAvalicaoController(app, atualizaAvalicaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO","ONG"] ))


// excluir avaliacao de um voluntario

const excluirAvaliacaoVoluntario = new ExcluirAvaliacaoVoluntario(avaliacaoRepositorio)
new ExcluirAvaliacaoVoluntarioController(app, excluirAvaliacaoVoluntario,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO","ONG"] ))



//----------------------------------------------------------------------Avaliacoes ong---------------------------------------------------------------------

const listarAvalicaoOng = new ListarAvaliacoesRecebidasOng(avaliacaoRepositorio)
new ListarAvaliacoesRecebidasOngController(app, listarAvalicaoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"] ) )

const listarAvalicoesFeitasOng = new ListarAvaliacoesFeitasOng(avaliacaoRepositorio)
new ListarAvaliacoesFeitasOngController(app, listarAvalicoesFeitasOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["ONG"] )  )

//excluir avalicao de uma ong
const excluirAvaliacaoOng = new ExcluirAvaliacaoOng(ongRepositorio, avaliacaoRepositorio)
new ExcluirAvaliacaoOngController(app, excluirAvaliacaoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO","ONG"] ))


// atualizar 
const atualizarAvalicaoOng = new AtualizarAvaliacaoOng(avaliacaoRepositorio)
new AtualizaarAvalicaoOngController(app, atualizarAvalicaoOng,UserAuthentication(voluntarioRepositorio, ongRepositorio, provedorToken), UsuarioAutorizacao(["VOLUNTARIO","ONG"] ) )
