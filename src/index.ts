import express from "express";
import RegistrarVoluntario from "./core/useCase/Voluntario/RegistrarVoluntario";
import VoluntarioRepositorio from "./adptadores/db/voluntario/VoluntarioRepositorio";
import RegistrarVoluntarioController from "./controllers/voluntario/RegistrarVoluntarioController";
import ValidateReq from "./adptadores/middleware/handleValidation";
import middlewareValidator from "./adptadores/middleware/handleValidation";
import Bcrypt from "./adptadores/auth/BcryptAdapter";
import LoginVoluntarioController from "./controllers/voluntario/LoginVoluntarioController";
import LoginVoluntario from "./core/useCase/Voluntario/LoginVoluntario";
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
const loginVoluntario = new LoginVoluntario(voluntarioDb, provedorToken  ,senhaCrypto)

const middlewareImagem = imagemUpload.single("imagem")
new RegistrarVoluntarioController(app,registrarVoluntario,middlewareValidador,middlewareImagem )
new LoginVoluntarioController(app,loginVoluntario)


const buscarVoluntarios = new BuscarVoluntarios(voluntarioDb)
new buscarVoluntariosControllers(app,buscarVoluntarios,UserAuthentication(voluntarioDb, provedorToken) )


// atualiza foto perfil voluntario
const editarFoto = new EditarFotoPerfil(voluntarioDb)
new EditarFotoController(app,editarFoto,UserAuthentication(voluntarioDb, provedorToken), middlewareImagem)

//excluir voluntario

const excluirVoluntario = new ExcluirVoluntario(voluntarioDb)
new ExcluirVoluntarioController(app, excluirVoluntario,UserAuthentication(voluntarioDb, provedorToken),middlewareValidador)


//editar voluntario

const editarVoluntario = new EditarVoluntario(voluntarioDb)
new EditarVoluntarioController(app,editarVoluntario, middlewareValidador,middlewareImagem,UserAuthentication(voluntarioDb, provedorToken) )