import express from "express";
import RegistrarVoluntario from "./core/useCase/Voluntario/RegistrarVoluntario";
import VoluntarioRepositorio from "./adptadores/db/voluntario/VoluntarioRepositorio";
import RegistrarVoluntarioController from "./controllers/voluntario/RegistrarVoluntarioController";
import ValidateReq from "./adptadores/middleware/handleValidation";
import middlewareValidator from "./adptadores/middleware/handleValidation";
import Bcrypt from "./adptadores/auth/BcryptAdapter";
import LoginUsuarioController from "./controllers/usuario/LoginUsuarioController";
import LoginVoluntario from "./core/useCase/usuario/LoginUsuario";
import JwtAdapter from "./adptadores/auth/JwtAdapter";
import buscarVoluntariosControllers from "./controllers/voluntario/BuscarVoluntariosControllers";
import UserAuthentication from "./adptadores/middleware/UserAuthentication";
import BuscarVoluntarios from "./core/useCase/Voluntario/BuscarVoluntarios";
import imagemUpload from "./adptadores/middleware/ImagemUpload";

import EditarFotoController from "./controllers/usuario/EditarFotoController";

import EditarFotoPerfil from "./core/useCase/Voluntario/EditarFotoPerfil";
import ExcluirVoluntario from "./core/useCase/Voluntario/ExcluirVoluntario";
import ExcluirVoluntarioController from "./controllers/usuario/ExcluirUsuarioController";
import EditarVoluntario from "./core/useCase/Voluntario/EditarVoluntario";
import EditarVoluntarioController from "./controllers/voluntario/EditarVoluntarioController";
import UsuarioAutorizacao from "./adptadores/middleware/UsuarioAutorizacao"
import UsuarioRepositorio from "./adptadores/db/usuario/UsuarioRepositorio";
import OngRepositorio from "./adptadores/db/ong/OngRepositorio";
import { RegistrarOng } from "./core/useCase/Ong/RegistrarOng";
import RegistrarOngController from "./controllers/ong/RegistrarOngController";
import ExcluirOng from "./core/useCase/Ong/ExcluirOng";
import EditarFotoPerfilOng from "./core/useCase/Ong/EditarFotoPerfilOng";
import BuscarOngs from "./core/useCase/Ong/BuscarOngs";



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
const usuarioDb = new UsuarioRepositorio() //usuariodb
const loginVoluntario = new LoginVoluntario(usuarioDb, provedorToken  ,senhaCrypto)

const middlewareImagem = imagemUpload.single("imagem")
new RegistrarVoluntarioController(app,registrarVoluntario,middlewareValidador,middlewareImagem )
new LoginUsuarioController(app,loginVoluntario)

const ongRepositorio = new OngRepositorio()
const buscarOngs =  new BuscarOngs(ongRepositorio)
const buscarVoluntarios = new BuscarVoluntarios(voluntarioDb)
new buscarVoluntariosControllers(app,buscarVoluntarios,buscarOngs, UserAuthentication(usuarioDb, provedorToken))// rota permitida para ong e voluntarios
// UsuarioAutorizacao(["VOLUNTARIO"]) 
//,UserAuthentication(usuarioDb, provedorToken)

// atualiza foto perfil voluntario

const editarFoto = new EditarFotoPerfil(voluntarioDb)
const editarFotoOng = new EditarFotoPerfilOng(ongRepositorio)
new EditarFotoController(app,editarFoto,editarFotoOng,UserAuthentication(usuarioDb, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]), middlewareImagem)

//excluir voluntario

const excluirVoluntario = new ExcluirVoluntario(voluntarioDb)
const excluirOng = new ExcluirOng(ongRepositorio)
new ExcluirVoluntarioController(app, excluirVoluntario,excluirOng,UserAuthentication(usuarioDb, provedorToken),UsuarioAutorizacao(["VOLUNTARIO","ONG"]),middlewareValidador)


//editar voluntario

const editarVoluntario = new EditarVoluntario(voluntarioDb)
new EditarVoluntarioController(app,editarVoluntario, middlewareValidador,UserAuthentication(usuarioDb, provedorToken),middlewareImagem )


// ong
const reristarOng = new RegistrarOng(ongRepositorio, senhaCrypto)
new RegistrarOngController(app, reristarOng)

//excluir
