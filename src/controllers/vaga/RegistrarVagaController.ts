import { Express, Request, Response } from "express";
import RegistrarVaga from "../../core/useCase/vaga/RegistrarVaga";
import VagaType from "../../@types/VagaType";

export default class RegistrarVagaController{
    constructor(
        private servidor: Express,
        private casoDeUso: RegistrarVaga,
        ...middleware: any[]
    ){
       const registrar = async (req: Request, res:Response) => {
             try {
                const usuario = req.usuario;

                console.log(usuario, "usuario vaga controler");
                const ongId = usuario?.id;
                
                console.log(ongId, "ongid");
                const vaga:VagaType = {
                    titulo: req.body.titulo,
                    descricao: req.body.descricao,
                    requisitos:req.body.requisitos,
                    quantidade:req.body.quantidade,
                    status: req.body.status,
                    duracao: req.body.duracao,
                    localizacao: req.body.localizacao,
                    tipoTrabalho: req.body.tipoTrabalho,
                    latitude: req.body.latitude,
                    longitude: req.body.longitude,
                    ongId: ongId!,
                }
                console.log(vaga, "vaga")
                const novaVaga = await this.casoDeUso.executar(vaga)
                res.status(200).json(novaVaga)
             } catch (error:any) {
                 console.log(error)
                 res.status(400).json({messagem: "Erro ao registrar vaga"})
             }
       }
       this.servidor.post("/cadastrar/vaga",...middleware, registrar)
    }
}