import express from "express";
import RegistrarVoluntario from "./core/useCase/Voluntario/RegistrarVoluntario";
import VoluntarioRepositorio from "./adptadores/db/VoluntarioRepositorio";
import RegistrarVoluntarioController from "./controllers/voluntario/RegistrarVoluntarioController";
import ValidateReq from "./adptadores/middleware/handleValidation";
import middlewareValidator from "./adptadores/middleware/handleValidation";
import Bcrypt from "./adptadores/auth/BcryptAdapter";
import LoginVoluntarioController from "./controllers/voluntario/LoginVoluntarioController";
import LoginVoluntario from "./core/useCase/Voluntario/LoginVoluntario";
import JwtAdapter from "./adptadores/auth/JwtAdapter";
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
new RegistrarVoluntarioController(app,registrarVoluntario,middlewareValidador)
new LoginVoluntarioController(app,loginVoluntario)