import Status from "./Status";
import TipoTrabalho from "./TipoTrabalho";

export default interface Vagatype {
  id?: string;
  titulo: string;
  descricao: string;
  requisitos: string[];
  status: Status;
  duracao: string;
  localizacao: string;
  tipoTrabalho: TipoTrabalho;
  latitude: number;
  longitude: number;
  ongId: string,
  createdAt?: Date; // Mantido opcional, pois o banco pode preencher automaticamente
  updatedAt?: Date;
  
}
