import { body } from "express-validator";

export const validarRegistroAvaliacao = () => {
    return [
    
    
      body("frequencia")
        .optional()
        .isString().notEmpty().withMessage("A frequência não pode ser uma string vazia."),
      
      body("tipo")
        .isString().notEmpty().withMessage("O tipo é obrigatório e não pode ser vazio."),
     
      body("comentario")
        .isString().notEmpty().withMessage("O comentário é obrigatório e não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O comentário deve ter entre 10 e 100 caracteres."),
      
      body("nota")
        .isInt({ min: 0, max: 10 }).withMessage("A nota deve ser um número inteiro entre 0 e 10."),
    ];
  };