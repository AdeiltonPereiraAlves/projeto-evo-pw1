// import multer from "multer";
// import path from 'path'
// import fs from "fs";
// import { Request } from "express";
// import UsuarioType from "../../@types/UsuarioType";
// import VoluntarioType from "../../@types/VoluntarioType";
// import OngType from "../../@types/OngType";

// declare global {
//     namespace Express {
//       interface Request {
//         file?: Multer.File;
//         usuario?:any
//       }
//     }
//   }

// const imageStore = multer.diskStorage({
//     destination: function (req: Request, file, cb) {
//         const usuario =req.usuario

//         console.log(usuario, "no midleware ")
//         let pasta = ""
//         if(usuario?.tipo === "VOLUNTARIO"){
//              pasta = "voluntarios"
//         }else if(usuario?.tipo === "ONG"){
//               pasta = "ongs"
//         }

//         const dirPath = path.resolve(`public/images/${pasta}`);
//         if (!fs.existsSync(dirPath)) {
//             fs.mkdirSync(dirPath, { recursive: true }); // Cria a pasta e subpastas se não existirem
//           }

//           cb(null, dirPath); 
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })
// const imagemUpload = multer({
//     storage: imageStore,
//     fileFilter(req, file, cb) {
//         if(!file.originalname.match(/\.(png|jpg)$/)){
//             return cb(new Error("Por favor, envie apenas jpg ou png!"))
//         }
//         cb(null, true)
//     }
// })

// export default  imagemUpload

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../../config/cloudinaryConfig"; // ajuste o caminho conforme sua estrutura
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      file?: Express.Multer.File;
      usuario?: any;
    }
  }
}

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req: Request, file) => {
    let folder = "geral";

    if (req.usuario?.tipo === "VOLUNTARIO") {
      folder = "voluntarios";
    } else if (req.usuario?.tipo === "ONG") {
      folder = "ongs";
    }

    return {
      folder,
      allowed_formats: ["jpg", "png", "jpeg"],
      public_id: req.usuario?.id, // usa o ID do usuário como nome da imagem
      overwrite: true, // sobrescreve imagem antiga
    };
  },
});

const imagemUpload = multer({ storage });

export default imagemUpload;
