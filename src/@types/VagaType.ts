import Status from "./Status";
import TipoTrabalho from "./TipoTrabalho";

export default interface Vagatype {
  id?: string;
  descricao: string;
  requisitos: string[];
  status: Status;
  duracao: string;
  localizacao: string;
  tipoTrabalho: TipoTrabalho;
  latitude: number;
  longitude: number;
}
