-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voluntarioId" TEXT NOT NULL,
    "ongId" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "frequecia" TEXT,
    "tipo" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    CONSTRAINT "Avaliacao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
