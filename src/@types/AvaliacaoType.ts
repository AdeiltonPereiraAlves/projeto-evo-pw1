import Tipo from "./Tipo";
import VoluntarioType from "./VoluntarioType";
import OngType from "./OngType";

export default interface AvaliacaoType {
  id?: string;
  voluntarioId: string;
  ongId: string;
  data?: Date;
  frequencia?: string;
  tipo: Tipo;
  comentario: string;
  nota: number;
  voluntario?: VoluntarioType;
  ong?: OngType;
}