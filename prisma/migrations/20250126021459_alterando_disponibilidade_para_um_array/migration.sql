/*
  Warnings:

  - The `disponibilidade` column on the `Voluntario` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Voluntario" DROP COLUMN "disponibilidade",
ADD COLUMN     "disponibilidade" TEXT[];
