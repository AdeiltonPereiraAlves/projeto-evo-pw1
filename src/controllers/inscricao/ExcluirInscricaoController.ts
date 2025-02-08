import ExcluirIncricao, { excluirInscricaoDto } from "../../core/useCase/inscricoes/ExcluirInscricao";
import ExcluirOng from "../../core/useCase/Ong/ExcluirOng";
import { Express, Request, Response } from "express";
export default class ExcluirInscricaoController{
    constructor(
        private servidor: Express,
        private casoDeUso: ExcluirIncricao,
        ...middleware: any[]
    ){
        const excluir = async (req:Request, res:Response) => {
            try {
                //  const id = req.usuario!.id
                 const voluntario = req.usuario
                 const {id} = req.params
                 const excluirInscricao:excluirInscricaoDto = {
                    id,
                    voluntarioId: voluntario!.id!
                 }
                 const respota = await this.casoDeUso.executar(excluirInscricao)

                 res.status(200).json(respota)

                
             } catch (error) {
                res.status(400).json({erro: "Erro ao deletar inscricao"})
                console.log(error)
             }
        }

        this.servidor.delete("/excluir/inscricao/:id",...middleware, excluir)
    }
}