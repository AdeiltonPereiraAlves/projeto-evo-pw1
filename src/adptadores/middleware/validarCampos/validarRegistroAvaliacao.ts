import { body } from "express-validator";

export const validarRegistroAvaliacao = () => {
    return [
      //comentario deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres
      body("comentario")
        .isString().notEmpty().withMessage("O comentário é obrigatório e não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O comentário deve ter entre 10 e 100 caracteres."),
      
      //nota deve ser um numero inteiro entre 0 e 10
      body("nota")
        .isInt({ min: 0, max: 10 }).withMessage("A nota deve ser um número inteiro entre 0 e 10."),
    ];
  };