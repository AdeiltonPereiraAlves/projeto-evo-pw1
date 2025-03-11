-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_ongId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_voluntarioId_fkey";

-- DropForeignKey
ALTER TABLE "Inscricao" DROP CONSTRAINT "Inscricao_vagaId_fkey";

-- DropForeignKey
ALTER TABLE "Inscricao" DROP CONSTRAINT "Inscricao_voluntarioId_fkey";

-- DropForeignKey
ALTER TABLE "Vaga" DROP CONSTRAINT "Vaga_ongId_fkey";

-- AlterTable
ALTER TABLE "Voluntario" ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "longitude" DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE CASCADE ON UPDATE CASCADE;
