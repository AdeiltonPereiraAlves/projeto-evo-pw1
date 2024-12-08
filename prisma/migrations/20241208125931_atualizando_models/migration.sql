/*
  Warnings:

  - Added the required column `endereco` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visao` to the `Ong` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ong" ADD COLUMN     "areaAtuacao" TEXT[],
ADD COLUMN     "endereco" TEXT NOT NULL,
ADD COLUMN     "visao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Voluntario" ADD COLUMN     "interesses" TEXT[];
