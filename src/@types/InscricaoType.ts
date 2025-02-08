export default interface Inscricao {
  id: string;
  voluntarioId: string;
  vagaId: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  criadoEm: Date;
}