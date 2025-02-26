-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('VOLUNTARIO', 'ONG');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ENCERRADO', 'ABERTO');

-- CreateEnum
CREATE TYPE "Disponibilidade" AS ENUM ('manha', 'tarde', 'noite', 'integral');

-- CreateEnum
CREATE TYPE "AreaAtuacao" AS ENUM ('EDUCACAO', 'SAUDE', 'AMBIENTE', 'TECNOLOGIA', 'CULTURA', 'DIREITOS_HUMANOS', 'FOME', 'POBREZA', 'ANIMAL', 'CRIANCA', 'MULHER', 'IGUALDADE', 'IDOSO', 'LGBTQIA', 'REFUGIADOS', 'EDUCACAO_INFANTIL', 'EMPREGO', 'VOLUNTARIADO', 'ESPORTES', 'ARTE', 'FAMILIA', 'SAUDE_MENTAL', 'REABILITACAO', 'JUSTICA_SOCIAL', 'SEGURANCA_ALIMENTAR', 'DESENVOLVIMENTO_SUSTENTAVEL', 'INFRAESTRUTURA', 'EMPODERAMENTO', 'TECNOLOGIA_SOCIAL');

-- CreateEnum
CREATE TYPE "TipoTrabalho" AS ENUM ('PRESENCIAL', 'REMOTO', 'HIBRIDO');

-- CreateEnum
CREATE TYPE "StatusInscricao" AS ENUM ('pendente', 'aprovado', 'rejeitado');

-- CreateTable
CREATE TABLE "Voluntario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT,
    "imagem" TEXT NOT NULL,
    "tipo" "TipoUsuario" NOT NULL,
    "contato" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "interesses" TEXT[],
    "habilidades" TEXT[],
    "disponibilidade" "Disponibilidade"[],

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT,
    "tipo" "TipoUsuario" NOT NULL,
    "cnpj" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "missao" TEXT NOT NULL,
    "visao" TEXT NOT NULL,
    "areaAtuacao" "AreaAtuacao"[],
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vaga" (
    "id" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "requisitos" TEXT[],
    "quantidade" INTEGER NOT NULL,
    "status" "Status" NOT NULL,
    "duracao" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "tipoTrabalho" "TipoTrabalho" NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inscricao" (
    "id" TEXT NOT NULL,
    "voluntarioId" TEXT NOT NULL,
    "vagaId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "StatusInscricao" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inscricao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL,
    "voluntarioId" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frequecia" TEXT,
    "tipo" "TipoUsuario" NOT NULL,
    "comentario" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_email_key" ON "Voluntario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_cpf_key" ON "Voluntario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_email_key" ON "Ong"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");

-- AddForeignKey
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inscricao" ADD CONSTRAINT "Inscricao_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
