/*
  Warnings:

  - The `disponibilidade` column on the `Voluntario` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('MANHA', 'TARDE', 'NOITE', 'INTEGRAL');

-- AlterTable
ALTER TABLE "Voluntario" DROP COLUMN "disponibilidade",
ADD COLUMN     "disponibilidade" "Disponibilidade"[];

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
