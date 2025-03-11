import CasoDeUso from "../../../@types/CasoDeUso";
import InscricaoRepositorio from "../../../adptadores/db/inscricao/InscricaoRepositorio";
import ListarInscricoesVoluntario from "../Voluntario/ListarInscricoesVoluntario";
import VoluntarioRepositorioPort from "../Voluntario/VoluntarioRepositorioPort";
export type excluirInscricaoDto = {
  id:string,
  voluntarioId : string
}
export default class ExcluirInscricao implements CasoDeUso<excluirInscricaoDto, boolean> {
  constructor(private inscricaoRepositorio: InscricaoRepositorio, private voluntarioRepositorio: VoluntarioRepositorioPort) {}

  async executar(dto: excluirInscricaoDto): Promise<boolean> {
    try {
      const ListarInscricao = new ListarInscricoesVoluntario(this.voluntarioRepositorio)
      const lista:any = await ListarInscricao.executar(dto.voluntarioId)

      console.log(lista, "lista")
      const existeIscricao = await lista!.inscricoes!.some((inscricao:any) => inscricao.id === dto.id)

      console.log(existeIscricao, "existe ")
      if(existeIscricao === false){
        console.log(existeIscricao,"if")
        throw new Error("Inscricao nao existe")
      }
      

      const resultado = await this.inscricaoRepositorio.excluir(dto.id);
      return resultado;
    } catch (error) {
      throw new Error("Erro ao excluir inscrição");
    }
  }
}