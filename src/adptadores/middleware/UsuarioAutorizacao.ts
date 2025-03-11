import { Request, Response, NextFunction } from 'express';
import UsuarioType from '../../@types/UsuarioType';

// Middleware para verificar o tipo do usuário
 const authorizeTipo= (usuarios: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Verifica se o usuário está autenticado e se o tipo é permitido
    const usuario = req.usuario

  console.log(usuario, "usuario no atori")

    if (!usuario) {
      return res.status(401).json({ message: 'Usuário não autenticado.' });
    }

    console.log(usuario, "Usuario")
    const tipoUsuario = usuario.tipo;

    console.log(tipoUsuario, "tipo usuario")
    if (!usuarios.includes(tipoUsuario)) {
      return res.status(403).json({ message: 'Acesso negado. Permissão insuficiente.' });
    }

    // Permitir o acesso
    next();
  };
};

export default authorizeTipo