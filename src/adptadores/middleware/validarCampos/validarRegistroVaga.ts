import { body } from "express-validator";

export const validarRegistroVaga = () => {
  return [
    body("titulo")
      .isString().withMessage("O título é obrigatório e deve ser uma string.")
      .isLength({ min: 3, max: 100 }).withMessage("O título deve ter entre 3 e 100 caracteres."),

    body("descricao")
      .isString().withMessage("A descrição é obrigatória e deve ser uma string.")
      .isLength({ min: 10 }).withMessage("A descrição deve ter pelo menos 10 caracteres."),

    body("requisitos")
      .isArray({ min: 1 }).withMessage("Os requisitos são obrigatórios e devem ser uma lista."),

    body("quantidade")
      .isInt({ min: 1 , max:30}).withMessage("A quantidade deve ser um número inteiro positivo."),

   
    body("duracao")
      .isString().withMessage("A duração é obrigatória e deve ser uma string."),

    body("localizacao")
      .isString().withMessage("A localização é obrigatória e deve ser uma string.")
      .isLength({min: 5, max: 60}),
  
  ];
};
