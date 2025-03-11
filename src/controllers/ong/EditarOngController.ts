import EditarOng, { editarOngDto } from "../../core/useCase/Ong/EditarOng";
import OngRepositorioPort from "../../core/useCase/Ong/OngRepositorioPort";
import { Express, Request, Response } from "express";
export default class EditarOngController {
    constructor(
        private servidor: Express,
        private casoDeUso: EditarOng,
        ...middleware: any[]
    ) {
        const editar = async (req: Request, res: Response) => {
            try {
                const usuario = req.usuario
                console.log(usuario, "usuario controller")
                const id = usuario?.id
                if (!id) {
                    res.status(400).json({ error: "ID é obrigatório" });
                    return
                }
              
                console.log(req.body, "req body")
                const { nome, missao, descricao, visao, areaAtuacao, endereco } = req.body
                const ongEditavel: editarOngDto = {
                    id,
                    nome,
                    descricao,
                    missao,
                    visao,
                    areaAtuacao,
                    endereco
                }
                const ongEditado = await this.casoDeUso.executar(ongEditavel)
                console.log(ongEditado, "ong editar")


              // deixa a senha undefined
         
                res.status(200).json(ongEditado)
            } catch (error: any) {
                res.status(400).send(error.message)
            }

        }
        this.servidor.put("/ong/editar", ...middleware, editar)
    }
}