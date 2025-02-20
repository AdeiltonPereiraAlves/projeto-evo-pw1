import CasoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import VoluntarioDb from "../../portas/VoluntarioDb";
import BuscarPorId from "./BuscarPorId";

export type editarVoluntarioDto = {
    id?: string,
    nome: string,
    email: string,
    tipo?:any,
    habilidades: string[],
    interesses: string[],

    disponibilidade: Disponibilidade[],
    imagem: string 
}

export default class EditarVoluntario implements CasoDeUso<editarVoluntarioDto,any>{
    constructor(
        private voluntario:VoluntarioDb
    ) {

    }
    async executar(dto: editarVoluntarioDto){
        console.log(dto,"voluntario existente")
    const buscarVoluntario = new BuscarPorId(this.voluntario)
     const voluntarioExistente = await buscarVoluntario.executar(dto.id!)
     if(!voluntarioExistente){
        throw new Error("Voluntario Nao encontrado")
      }
     console.log(voluntarioExistente,"voluntario existente")

      let id = ""
      
       

           id = voluntarioExistente.voluntario.usuarioId 
           const dados = {
            id,
            nome: dto.nome ?? voluntarioExistente.nome, // Mantém o valor atual se não for fornecido
            email: dto.email ?? voluntarioExistente.email,
            tipo: dto.tipo?? voluntarioExistente.tipo,
            imagem: dto.imagem ?? voluntarioExistente.imagem,
            voluntario: {
              update: {
                habilidades: dto.habilidades ?? voluntarioExistente.voluntario.habilidades,
                interesses: dto.interesses ?? voluntarioExistente.voluntario.interesses,
                disponibilidade: dto.disponibilidade ?? voluntarioExistente.voluntario.disponibilidade,
              },
            },
           }
          
           



       const resposta = await this.voluntario.atualizar(dados)
       return resposta
    }
}