/*
  Warnings:

  - A unique constraint covering the columns `[voluntarioId,vagaId]` on the table `Inscricao` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Inscricao_voluntarioId_vagaId_key" ON "public"."Inscricao"("voluntarioId", "vagaId");
