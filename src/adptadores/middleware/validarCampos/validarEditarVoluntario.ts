import { body } from "express-validator";

export const validarEditarVoluntario =  () => {
  return [
    // Nome: deve ser uma string e ter entre 3 e 40 caracteres
    body("nome")
    .notEmpty().withMessage("O nome não pode ser vazio.")
      .isString().withMessage("O nome é obrigatório.")
      .isLength({ min: 3, max: 40 }).withMessage("O nome precisa ter no mínimo 3 caracteres e no máximo 40."),

    // Email: deve ser um email válido
    body("email")
      .isEmail().withMessage("O email é obrigatório e precisa ser válido."),
    
   
    // Contato: deve ser um número de telefone válido
    body("contato")
      .isMobilePhone("pt-BR").withMessage("O contato deve ser um número de telefone válido."),

    // CPF: deve ser um CPF válido
    
    // Habilidades: deve ser um array ou lista
    body("habilidades")
      .isArray().withMessage("As habilidades precisam ser uma lista de strings."),

    // Interesses: deve ser um array ou lista
    body("interesses")
      .isArray().withMessage("Os interesses precisam ser uma lista de strings."),

    // Disponibilidade: deve ser uma string, como 'full-time', 'part-time' ou uma lista de horários
    body("disponibilidade")
      .isArray().withMessage("A disponibilidade é obrigatória.")
      .isIn(["tarde", "manhã", "noite","integral"]).withMessage("A disponibilidade deve ser 'tarde', 'noite ', 'manha' ou 'integral' ."),

    // Senha: deve ter entre 6 e 20 caracteres
   
    // Imagem: deve ser uma string (assumindo que você está recebendo um URL ou caminho de imagem)
   
  ];
};
