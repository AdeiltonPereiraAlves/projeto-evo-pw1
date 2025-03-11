import { Express, Request, Response } from "express";
import ListarAvaliacoesFeitasOng, { avaliacaoDto } from "../../core/useCase/Ong/ListarAvaliacoesFeitasOng";
export default class ListarAvaliacoesFeitasOngController{
    constructor(
        private servidor:Express,
        private casoDeUso: ListarAvaliacoesFeitasOng,
        ...middleware:any[]

    ){
      const buscar = async (req: Request,res:Response) =>{


            try {
                const ong = req.usuario // pegando o payload depois do login com as informaões
                console.log(ong ,"ong da req")
                
                const id = ong?.id
                
                console.log(id, "id")
                const avaliadoDto:avaliacaoDto = {
                    id,
                    tipo: ong.tipo
                }
                const result = await this.casoDeUso.executar(avaliadoDto!)
                console.log(result, "res")
                
                res.status(200).json(result)
            } catch (error:any) {
                res.status(403).send(error.message)
            }
      }

      this.servidor.get("/listar/avaliacoes/feitas",...middleware,buscar)
    }
}