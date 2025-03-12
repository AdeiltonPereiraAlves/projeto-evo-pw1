import ExcluirVoluntario from "../../core/useCase/Voluntario/ExcluirVoluntario";
import { Express, Response, Request } from "express";
import fs from "fs";
import path from "path";
import BuscarPorId from "../../core/useCase/Voluntario/BuscarPorId";
import voluntarioRepositorio from "../../core/useCase/Voluntario/VoluntarioRepositorioPort";

export default class ExcluirVoluntarioController {
    constructor(
        private servidor: Express,
        private casoDeUso: ExcluirVoluntario,
        private buscarPorId: BuscarPorId,
        ...middleware: any[]
    ) {
        const excluirVoluntario = async (req: Request, res: Response): Promise<void> => {
            try {
                const { id } = req.params;
                console.log(id, "id");
        
                // Buscar voluntário para pegar a imagem
                const voluntario = await this.buscarPorId.executar(id);
        
                if (!voluntario) {
                    res.status(404).send("Voluntário não encontrado");
                    return;
                }
        
                // Se houver imagem, excluir do sistema de arquivos
                if (voluntario.imagem) {
                    const caminhoImagem = path.resolve(`public/images/voluntarios/${voluntario.imagem}`);
                    
                    if (fs.existsSync(caminhoImagem)) {
                        fs.unlinkSync(caminhoImagem);
                        console.log(`Imagem ${voluntario.imagem} deletada com sucesso!`);
                    } else {
                        console.log("Imagem não encontrada no sistema de arquivos.");
                    }
                }
        
                // Executar caso de uso para excluir voluntário
                const resposta = await this.casoDeUso.executar(id);
                res.status(200).json(resposta);
        
            } catch (error: any) {
                console.error("Erro ao excluir voluntário:", error);
                res.status(500).send(error.message);
            }
        };
        this.servidor.delete("/voluntario/excluir/:id", ...middleware, excluirVoluntario);
        
}}
