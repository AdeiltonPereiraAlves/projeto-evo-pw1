import { Result } from "express-validator";
import CasoDeUso from "../../../@types/CasoDeUso";
import Id from "../../shared/Id";
import InscricaoRepositorioPort from "../Inscricao/InscricaoRepositorio";
import BuscarVagaPorId from "../vaga/BuscarVagaPorId";
import VagaRepositorioPort from "../vaga/VagaRepositorioPort";
import VoluntarioDb from "../Voluntario/VoluntarioRepositorioPort";
import BuscarVoluntarioPorId from "../Voluntario/BuscarPorId";
import { StatusInscricao } from "@prisma/client";

export type inscricaoDto = {
  id?: string;
  status: StatusInscricao;
  ativo: boolean;
  vagaId?: string;
  voluntarioId?: string;
};

export default class RegistrarInscricao
  implements CasoDeUso<inscricaoDto, any>
{
  constructor(
    private inscricaoRepositorio: InscricaoRepositorioPort,
    private vagaRespositorio: VagaRepositorioPort,
    private VoluntarioRepositorio: VoluntarioDb
  ) {}
  async executar(dto: inscricaoDto) {
    try {
      const buscarVagaId = new BuscarVagaPorId(this.vagaRespositorio);

      console.log(dto.vagaId, "vagaid")
      const vaga = await buscarVagaId.executar(dto.vagaId!);

      console.log(vaga, "vaga e v");
      if (vaga.id !== dto.vagaId) {
        throw new Error("error id de vaga não encontrado");
      }
      const buscarVoluntarioId = new BuscarVoluntarioPorId(
        this.VoluntarioRepositorio
      );
      const voluntario = await buscarVoluntarioId.executar(dto.voluntarioId!);

      console.log(voluntario, "voluntario");

      if (voluntario.id !== dto.voluntarioId) {
        throw new Error("error id de voluntario não encontrado");
      }
      const inscricao = {
        id: Id.gerarId(),
        status:'pendente',
        ativo: dto.ativo,
        vagaId: vaga.id,
        voluntarioId: voluntario.id,
      };
      const novaInscricao = await this.inscricaoRepositorio.registrar(
        inscricao
      );

      console.log(novaInscricao, "nova inscricao");
      return novaInscricao;
    } catch (error) {
      console.log(error, "erro no c");
      throw new Error("Method not implemented c.");
    }
  }
}
