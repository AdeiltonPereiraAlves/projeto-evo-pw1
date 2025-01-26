/*
  Warnings:

  - The values [MANHA,TARDE,NOITE,INTEGRAL] on the enum `Disponibilidade` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Disponibilidade_new" AS ENUM ('manha', 'tarde', 'noite', 'integral');
ALTER TABLE "Voluntario" ALTER COLUMN "disponibilidade" TYPE "Disponibilidade_new"[] USING ("disponibilidade"::text::"Disponibilidade_new"[]);
ALTER TYPE "Disponibilidade" RENAME TO "Disponibilidade_old";
ALTER TYPE "Disponibilidade_new" RENAME TO "Disponibilidade";
DROP TYPE "Disponibilidade_old";
COMMIT;
