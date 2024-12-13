-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagem" TEXT,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Voluntario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuarioId" TEXT NOT NULL,
    "interesses" TEXT NOT NULL,
    "habilidades" TEXT NOT NULL,
    "disponibilidade" TEXT NOT NULL,
    CONSTRAINT "Voluntario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ong" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "usuarioId" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "visao" TEXT NOT NULL,
    "areaAtuacao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    CONSTRAINT "Ong_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Voluntario_usuarioId_key" ON "Voluntario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_usuarioId_key" ON "Ong"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "Ong_cnpj_key" ON "Ong"("cnpj");
