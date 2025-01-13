/*
  Warnings:

  - Added the required column `updatedAt` to the `Avaliacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Inscricao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoTrabalho` to the `Vaga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Vaga` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoTrabalho" AS ENUM ('PRESENCIAL', 'REMOTO', 'HIBRIDO');

-- AlterTable
ALTER TABLE "Avaliacao" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Inscricao" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Vaga" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "tipoTrabalho" "TipoTrabalho" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
