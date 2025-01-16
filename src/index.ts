import express from "express";
import RegistrarVoluntario from "./core/useCase/Voluntario/RegistrarVoluntario";
import VoluntarioRepositorio from "./adptadores/db/VoluntarioRepositorio";
import RegistrarVoluntarioController from "./controllers/voluntario/RegistrarVoluntarioController";
import ValidateReq from "./core/middleware/handleValidation";
import middlewareValidator from "./core/middleware/handleValidation";
const app = express();
const port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(port, () => {
    console.log("servidor rodando")
} )

const voluntarioDb = new VoluntarioRepositorio();
const registrarVoluntario = new RegistrarVoluntario(voluntarioDb)
const middleware = middlewareValidator
new RegistrarVoluntarioController(app,registrarVoluntario,middleware)