import multer from "multer";
import path from 'path'
import fs from "fs";
import { Request } from "express";
import UsuarioType from "../../@types/UsuarioType";

declare global {
    namespace Express {
      interface Request {
        file?: Multer.File;
        usuario?: UsuarioType
      }
    }
  }
  
const imageStore = multer.diskStorage({
    destination: function (req: Request, file, cb) {
        const usuario =req.usuario
        
        console.log(usuario, "no midleware ")
        let pasta = ""
        if(usuario?.usuario.tipo === "VOLUNTARIO"){
             pasta = "voluntarios"
        }else if(usuario?.usuario.tipo === "ONG"){
              pasta = "ongs"
        }

        const dirPath = path.resolve(`public/images/${pasta}`);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true }); // Cria a pasta e subpastas se não existirem
          }

          cb(null, dirPath); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const imagemUpload = multer({
    storage: imageStore,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error("Por favor, envie apenas jpg ou png!"))
        }
        cb(null, true)
    }
})

export default  imagemUpload