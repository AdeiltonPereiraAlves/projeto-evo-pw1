import Tipo from "./Tipo";

interface UsuarioType  {
  id?: string;
  nome: string;
  email: string;
  senha?: string;
  imagem: File;
  tipo: Tipo;
};

export default UsuarioType;
