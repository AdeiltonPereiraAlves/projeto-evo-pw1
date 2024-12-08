-- CreateEnum
CREATE TYPE "TipoUsuario" AS ENUM ('VOLUNTARIO', 'ONG');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagem" TEXT,
    "tipo" "TipoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voluntario" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "habilidades" TEXT[],

    CONSTRAINT "Voluntario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Ong_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_usuarioId_key" ON "Voluntario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_usuarioId_key" ON "Ong"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");

-- AddForeignKey
ALTER TABLE "Voluntario" ADD CONSTRAINT "Voluntario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ong" ADD CONSTRAINT "Ong_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
