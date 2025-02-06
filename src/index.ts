import express from "express";
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
import EditarFotoPerfilOng from "./core/useCase/Ong/EditarFotoPerfilOng";
import EditarFotoPerfilController from "./controllers/ong/EditarFotoController"
import EditarOng from "./core/useCase/Ong/EditarOng";
import EditarOngController from "./controllers/ong/EditarOngController";
import VagaRepositorio from "./adptadores/db/vaga/VagaRepositorio";
import RegistrarVaga from "./core/useCase/vaga/RegistrarVaga";
import RegistrarVagaController from "./controllers/vaga/RegistrarVagaController";

const app = express();
const port = process.env.PORT
const secret = process.env.JWTSECRET
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, () => {
    console.log("servidor rodando")
} )


const senhaCrypto = new Bcrypt()
const voluntarioDb = new VoluntarioRepositorio();
const registrarVoluntario = new RegistrarVoluntario(voluntarioDb,senhaCrypto)
const middlewareValidador = middlewareValidator
const provedorToken = new  JwtAdapter(secret!)

console.log(provedorToken,"provedor token")
// const usuarioDb = new UsuarioRepositorio() //usuariodb
const ongDb = new OngRepositorio()
const loginVoluntario = new LonginUsuario(voluntarioDb,ongDb, provedorToken  ,senhaCrypto)

const middlewareImagem = imagemUpload.single("imagem")
new RegistrarVoluntarioController(app,registrarVoluntario,middlewareValidador,middlewareImagem )
new LoginUsuarioController(app,loginVoluntario)

const usuarioAutenticaoDb = new UsuarioAutenticao() // altentica o usuario dinamicamente retornando dados para o payload de uma ong ou voluntario
const buscarVoluntarios = new BuscarVoluntarios(voluntarioDb)
new buscarVoluntariosControllers(app,buscarVoluntarios,UserAuthentication(usuarioAutenticaoDb, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]) )
// UsuarioAutorizacao(["VOLUNTARIO"]) 
//UserAuthentication(voluntarioDb, provedorToken)

// atualiza foto perfil voluntario
const usuarioDb = new UsuarioRepositorio("VOLUNTARIO","//")
const editarFoto = new EditarFotoPerfil(voluntarioDb)
new EditarFotoController(app,editarFoto,UserAuthentication(usuarioAutenticaoDb, provedorToken), middlewareImagem)

// //excluir voluntario

const excluirVoluntario = new ExcluirVoluntario(voluntarioDb)
new ExcluirVoluntarioController(app, excluirVoluntario,middlewareValidador)
//UserAuthentication(voluntarioDb, provedorToken),


// //editar voluntario

const editarVoluntario = new EditarVoluntario(voluntarioDb)
new EditarVoluntarioController(app,editarVoluntario, middlewareValidador,middlewareImagem,UserAuthentication(voluntarioDb, provedorToken) )


// rotas para ong

//registrar
const registrarOng = new RegistrarOng(ongDb,senhaCrypto )

new RegistrarOngController(app, registrarOng )
//login
// const login = new LonginUsuario(ongDb,provedorToken  ,senhaCrypto )
// new LoginUsuarioController(app, login, )
// //excluir
const excluirOng = new ExcluirOng(ongDb)
new ExcluirOngController(app, excluirOng, middlewareValidador)

//buscar ongs

const buscarOngs = new BuscarOngs(ongDb)
new BuscarOngController(app, buscarOngs,UserAuthentication(usuarioAutenticaoDb, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]))

// editar foto ong
const ongRepo = new UsuarioRepositorio("ONG","//")
const editarFotoOng = new EditarFotoPerfilOng(ongRepo)

new EditarFotoPerfilController(app, editarFotoOng, UserAuthentication(usuarioAutenticaoDb, provedorToken),  middlewareImagem)


//editar ong

const editar = new EditarOng(ongDb)
new EditarOngController(app,editar, UserAuthentication(usuarioAutenticaoDb, provedorToken),middlewareImagem)


// registrar vaga

const vagaRepositorio = new VagaRepositorio()
const registrarVaga = new RegistrarVaga(vagaRepositorio)

new RegistrarVagaController(app, registrarVaga, UserAuthentication(usuarioAutenticaoDb, provedorToken),UsuarioAutorizacao(["ONG"]) )