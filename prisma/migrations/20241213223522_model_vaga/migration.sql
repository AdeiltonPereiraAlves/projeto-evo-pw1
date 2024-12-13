-- CreateTable
CREATE TABLE "Vaga" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ongId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "requesitos" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Vaga_ongId_key" ON "Vaga"("ongId");
