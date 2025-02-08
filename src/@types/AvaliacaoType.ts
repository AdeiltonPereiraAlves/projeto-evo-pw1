export default interface Avaliacao {
  id: string;
  voluntarioId: string;
  ongId: string;
  nota: number;
  comentario?: string;
  criadoEm: Date;
}