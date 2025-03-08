import VoluntarioType from "./VoluntarioType";
import VagaType from "./VagaType";
import Status from "./Status";

export enum StatusInscricao  {pendente='pendente' ,aprovado= 'aprovado' , rejeitado='rejeitado'};//alterar a tabela do prisma para usar statusInscricao

export default interface InscricaoType {
  id?: string;
  voluntarioId: string;
  vagaId: string;
  data?: Date;
  status: StatusInscricao; //alterar a tabela do prisma para usar statusInscricao
  ativo: boolean
  voluntario?: VoluntarioType;
  vaga?: VagaType;
}