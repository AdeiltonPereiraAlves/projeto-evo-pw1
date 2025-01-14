/*
  Warnings:

  - Made the column `imagem` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "senha" DROP NOT NULL,
ALTER COLUMN "imagem" SET NOT NULL;
