/*
  Warnings:

  - You are about to drop the column `data` on the `Avaliacao` table. All the data in the column will be lost.
  - You are about to drop the column `frequecia` on the `Avaliacao` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Avaliacao" DROP COLUMN "data",
DROP COLUMN "frequecia";
