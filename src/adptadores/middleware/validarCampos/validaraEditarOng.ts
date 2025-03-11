import { body } from "express-validator";

 const validarEditarOng= () => {
    return [
      body("nome")
        .isString().withMessage("O nome é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O nome não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O nome deve ter entre 10 e 100 caracteres."),
 
      body("descricao")
        .isString().withMessage("A descrição é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A descrição não pode ser vazia.")
        .isLength({ min: 10, max: 100 }).withMessage("A descrição deve ter entre 10 e 100 caracteres."),
  
      body("visao")
        .isString().withMessage("A visão é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A visão não pode ser vazia.")
        .isLength({ min: 10, max: 100 }).withMessage("A visão deve ter entre 10 e 100 caracteres."),
  
      body("missao")
        .isString().withMessage("A missão é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A missão não pode ser vazia.")
        .isLength({ min: 10, max: 100 }).withMessage("A missão deve ter entre 10 e 100 caracteres."),
  
      body("areaAtuacao")
        .isArray({ min: 1 }).withMessage("A área de atuação é obrigatória e deve ser uma lista."),
  
      body("endereco")
        .isString().withMessage("O endereço é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O endereço não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O endereço deve ter entre 10 e 100 caracteres."),
    ];
  };
  export default validarEditarOng