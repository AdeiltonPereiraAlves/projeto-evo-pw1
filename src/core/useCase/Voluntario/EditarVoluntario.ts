import CasoDeUso from "../../../@types/CasoDeUso";
import Disponibilidade from "../../../@types/Disponibilidade";
import VoluntarioDb from "./VoluntarioRepositorio";
import BuscarPorId from "./BuscarPorId";

export type editarVoluntarioDto = {
  id?: string,
  nome: string,
  email: string,
  tipo?: any,
  contato: string,
  habilidades: string[],
  interesses: string[],
  disponibilidade: Disponibilidade[],
  imagem: string
}

export default class EditarVoluntario implements CasoDeUso<editarVoluntarioDto, any> {
  constructor(
    private voluntario: VoluntarioDb
  ) {

  }
  async executar(dto: editarVoluntarioDto) {
    console.log(dto, "voluntario existente")
    const buscarVoluntario = new BuscarPorId(this.voluntario)
    const voluntarioExistente = await buscarVoluntario.executar(dto.id!)
    if (!voluntarioExistente) {
      throw new Error("Voluntario Nao encontrado")
    }
    console.log(voluntarioExistente, "voluntario existente")

    let id = ""



    id = voluntarioExistente.id!
    const dados = {
      id,
      nome: dto.nome ?? voluntarioExistente.nome, // Mantém o valor atual se não for fornecido
      email: dto.email ?? voluntarioExistente.email,
      contato: dto.contato ?? voluntarioExistente.contato,
      imagem: dto.imagem ?? voluntarioExistente.imagem,

      habilidades: dto.habilidades ?? voluntarioExistente.habilidades,
      interesses: dto.interesses ?? voluntarioExistente.interesses,
      disponibilidade: dto.disponibilidade ?? voluntarioExistente.disponibilidade,

    }





    const resposta = await this.voluntario.atualizar(dados)
    return resposta
  }
}