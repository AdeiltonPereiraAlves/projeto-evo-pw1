/*
  Warnings:

  - You are about to drop the column `usuarioId` on the `Ong` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Voluntario` table. All the data in the column will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Ong` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Voluntario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Ong` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `Vaga` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contato` to the `Voluntario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Voluntario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Voluntario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imagem` to the `Voluntario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Voluntario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Voluntario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ong" DROP CONSTRAINT "Ong_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Voluntario" DROP CONSTRAINT "Voluntario_usuarioId_fkey";

-- DropIndex
DROP INDEX "Ong_usuarioId_key";

-- DropIndex
DROP INDEX "Voluntario_usuarioId_key";

-- AlterTable
ALTER TABLE "Ong" DROP COLUMN "usuarioId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT,
ADD COLUMN     "tipo" "TipoUsuario" NOT NULL;

-- AlterTable
ALTER TABLE "Vaga" ADD COLUMN     "quantidade" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Voluntario" DROP COLUMN "usuarioId",
ADD COLUMN     "contato" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "imagem" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT,
ADD COLUMN     "tipo" "TipoUsuario" NOT NULL;

-- DropTable
DROP TABLE "Usuario";

-- CreateIndex
CREATE UNIQUE INDEX "Ong_email_key" ON "Ong"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_email_key" ON "Voluntario"("email");
