/*
  Warnings:

  - Added the required column `resultado` to the `Inscricao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inscricao" ADD COLUMN     "resultado" TEXT NOT NULL;
