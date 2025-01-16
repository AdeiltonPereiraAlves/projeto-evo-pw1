import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";


    
  export default function  middlewareValidator(req:Request, res:Response, next:NextFunction){
          const erros = validationResult(req)
          if(erros.isEmpty()){
            return next()
          }

          const extractErros: object[] = []
          erros.array().map((err) => extractErros.push({[err.type]:err.msg}))
          return res.status(422).json({
            erros: extractErros,
          })


    }
