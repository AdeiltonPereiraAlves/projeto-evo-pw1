/*
  Warnings:

  - The values [EDUCAÇãO,EDUCAÇÃO_INFANTIL,REABILITAÇÃO,SEGURANÇA_ALIMENTAR] on the enum `AreaAtuacao` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AreaAtuacao_new" AS ENUM ('EDUCACAO', 'SAUDE', 'AMBIENTE', 'TECNOLOGIA', 'CULTURA', 'DIREITOS_HUMANOS', 'FOME', 'POBREZA', 'ANIMAL', 'CRIANCA', 'MULHER', 'IGUALDADE', 'IDOSO', 'LGBTQIA', 'REFUGIADOS', 'EDUCACAO_INFANTIL', 'EMPREGO', 'VOLUNTARIADO', 'ESPORTES', 'ARTE', 'FAMILIA', 'SAUDE_MENTAL', 'REABILITACAO', 'JUSTICA_SOCIAL', 'SEGURANCA_ALIMENTAR', 'DESENVOLVIMENTO_SUSTENTAVEL', 'INFRAESTRUTURA', 'EMPODERAMENTO', 'TECNOLOGIA_SOCIAL');
ALTER TABLE "public"."Ong" ALTER COLUMN "areaAtuacao" TYPE "public"."AreaAtuacao_new"[] USING ("areaAtuacao"::text::"public"."AreaAtuacao_new"[]);
ALTER TYPE "public"."AreaAtuacao" RENAME TO "AreaAtuacao_old";
ALTER TYPE "public"."AreaAtuacao_new" RENAME TO "AreaAtuacao";
DROP TYPE "public"."AreaAtuacao_old";
COMMIT;
