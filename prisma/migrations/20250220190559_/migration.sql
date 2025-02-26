/*
  Warnings:

  - Changed the type of `status` on the `Inscricao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "StatusInscricao" AS ENUM ('pendente', 'aprovado', 'rejeitado');

-- AlterTable
ALTER TABLE "Inscricao" DROP COLUMN "status",
ADD COLUMN     "status" "StatusInscricao" NOT NULL;
