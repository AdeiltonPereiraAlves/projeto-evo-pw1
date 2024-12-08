-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('MANHA', 'TARDE', 'NOITE', 'INTEGRAL');

-- AlterTable
ALTER TABLE "Voluntario" ADD COLUMN     "disponibilidade" "Disponibilidade"[];
