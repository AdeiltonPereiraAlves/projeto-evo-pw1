import { body } from "express-validator";

 const validarEditarOng= () => {
    return [
      //nome deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres
      body("nome")
        .isString().withMessage("O nome é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O nome não pode ser vazio.")
        .isLength({ min: 10, max: 100 }).withMessage("O nome deve ter entre 10 e 100 caracteres."),
      
      //descrição deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres
      body("descricao")
        .isString().withMessage("A descrição é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A descrição não pode ser vazia.")
        .isLength({ min: 10, max: 300 }).withMessage("A descrição deve ter entre 10 e 100 caracteres."),
  
      //visao deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres    
      body("visao")
        .isString().withMessage("A visão é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A visão não pode ser vazia.")
        .isLength({ min: 10, max: 300 }).withMessage("A visão deve ter entre 10 e 100 caracteres."),
      
        //missao deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres
      body("missao")
        .isString().withMessage("A missão é obrigatória e deve ser uma string.")
        .notEmpty().withMessage("A missão não pode ser vazia.")
        .isLength({ min: 10, max: 300 }).withMessage("A missão deve ter entre 10 e 100 caracteres."),
      
      //areaAtuacao deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres  
      body("areaAtuacao")
        .isArray({ min: 1 }).withMessage("A área de atuação é obrigatória e deve ser uma lista."),
      
      //endereco deve ser obrigatório, não pode ser vazio e deve ter entre 10 e 100 caracteres
      body("endereco")
        .isString().withMessage("O endereço é obrigatório e deve ser uma string.")
        .notEmpty().withMessage("O endereço não pode ser vazio.")
        .isLength({ min: 10, max: 300 }).withMessage("O endereço deve ter entre 10 e 100 caracteres."),
    ];
  };
  export default validarEditarOng