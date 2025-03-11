import { $Enums } from "@prisma/client";


export default interface Vagatype {
  id?: string;
  titulo: string;
  descricao: string;
  requisitos: string[];
  quantidade: number;
  status: $Enums.Status;
  duracao: string;
  localizacao: string;
  tipoTrabalho: $Enums.TipoTrabalho;
  latitude: number;
  longitude: number;
  ongId: string ,
  createdAt?: Date; // Mantido opcional, pois o banco pode preencher automaticamente
  updatedAt?: Date;
  [key: string]: any;
  
}
