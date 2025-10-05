import { body } from "express-validator";

 const validarRegistroOng = () => {
    return [
      body("nome")
        .isString().withMessage("O nome é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O nome não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O nome deve ter entre 10 e 100 caracteres."),
  
      body("email")
        .isEmail().withMessage("O e-mail deve ser válido."),
  
    
      body("senha")
        .optional()
        .isLength({ min: 6 }).withMessage("A senha deve ter no mínimo 6 caracteres."),
  
      body("cnpj")
        .isString().withMessage("O CNPJ é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O CNPJ não pode ser vazio.")
        .isLength({min:14, max:18}).withMessage("O CNPJ deve ter no minimo 14 dígitos numéricos."),
  
      body("descricao")
        .isString().withMessage("A descrição é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A descrição não pode ser vazia.")
        .isLength({ min: 10, max: 200 }).withMessage("A descrição deve ter entre 10 e 100 caracteres."),
  
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
  export default validarRegistroOng