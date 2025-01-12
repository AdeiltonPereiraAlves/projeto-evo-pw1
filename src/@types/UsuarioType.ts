import Tipo from "./Tipo";

interface UsuarioType  {
  id?: string;
  nome: string;
  email: string;
  tipo: Tipo;
  senha?: string;
  imagem?: string; // ou string
};

export default UsuarioType;
