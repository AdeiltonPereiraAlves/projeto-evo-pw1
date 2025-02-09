import VoluntarioType from "./VoluntarioType";
import VagaType from "./VagaType";
import Status from "./Status";

type StatusInscricao = 'pendente' | 'aprovado' | 'rejeitado';//alterar a tabela do prisma para usar statusInscricao

export default interface InscricaoType {
  id?: string;
  voluntarioId: string;
  vagaId: string;
  data?: Date;
  status: Status; //alterar a tabela do prisma para usar statusInscricao
  voluntario?: VoluntarioType;
  vaga?: VagaType;
}