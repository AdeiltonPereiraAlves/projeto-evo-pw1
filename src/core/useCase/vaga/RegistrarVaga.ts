import CasoDeUso from "../../../@types/CasoDeUso";
import Vagatype from "../../../@types/VagaType";
import VagaRepositorioPort from "./VagaRepositorioPort";
import Id from "../../shared/Id";
import Vaga from "../../model/vaga/Vaga";

export default class RegistrarVaga implements CasoDeUso<Vagatype, any> {
  constructor(private vagaRepositorio: VagaRepositorioPort) {}
  async executar(dto: Vagatype) {
    try {
      const vaga = new Vaga(
        Id.gerarId(),
        dto.titulo,

        dto.descricao,

        dto.requisitos,

        dto.quantidade,

        dto.status,
        dto.duracao,

        dto.localizacao,

        dto.tipoTrabalho,

        dto.latitude,

        dto.longitude,
        dto.ongId
      );

      console.log(vaga, "vaga caso de uso");
      const novaVaga = await this.vagaRepositorio.registrar(vaga);
      console.log(novaVaga, "nova vag");
      return novaVaga;
    } catch (error: any) {
      console.log(error, "erro de log");
      throw new Error("Erro ao registrar vaga");
    }
  }
}
