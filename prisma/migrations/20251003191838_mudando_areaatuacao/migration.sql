/*
  Warnings:

  - The values [EDUCACAO,EDUCACAO_INFANTIL,REABILITACAO,SEGURANCA_ALIMENTAR] on the enum `AreaAtuacao` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AreaAtuacao_new" AS ENUM ('EDUCAÇãO', 'SAUDE', 'AMBIENTE', 'TECNOLOGIA', 'CULTURA', 'DIREITOS_HUMANOS', 'FOME', 'POBREZA', 'ANIMAL', 'CRIANCA', 'MULHER', 'IGUALDADE', 'IDOSO', 'LGBTQIA', 'REFUGIADOS', 'EDUCAÇÃO_INFANTIL', 'EMPREGO', 'VOLUNTARIADO', 'ESPORTES', 'ARTE', 'FAMILIA', 'SAUDE_MENTAL', 'REABILITAÇÃO', 'JUSTICA_SOCIAL', 'SEGURANÇA_ALIMENTAR', 'DESENVOLVIMENTO_SUSTENTAVEL', 'INFRAESTRUTURA', 'EMPODERAMENTO', 'TECNOLOGIA_SOCIAL');
ALTER TABLE "public"."Ong" ALTER COLUMN "areaAtuacao" TYPE "public"."AreaAtuacao_new"[] USING ("areaAtuacao"::text::"public"."AreaAtuacao_new"[]);
ALTER TYPE "public"."AreaAtuacao" RENAME TO "AreaAtuacao_old";
ALTER TYPE "public"."AreaAtuacao_new" RENAME TO "AreaAtuacao";
DROP TYPE "public"."AreaAtuacao_old";
COMMIT;
