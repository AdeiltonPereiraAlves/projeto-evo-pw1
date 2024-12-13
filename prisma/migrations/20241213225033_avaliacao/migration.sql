-- CreateTable
CREATE TABLE "Inscricao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "voluntarioId" TEXT NOT NULL,
    "vagaId" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    CONSTRAINT "Inscricao_voluntarioId_fkey" FOREIGN KEY ("voluntarioId") REFERENCES "Voluntario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Inscricao_vagaId_fkey" FOREIGN KEY ("vagaId") REFERENCES "Vaga" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vaga" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ongId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "requesitos" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    CONSTRAINT "Vaga_ongId_fkey" FOREIGN KEY ("ongId") REFERENCES "Ong" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Vaga" ("descricao", "duracao", "id", "localizacao", "ongId", "requesitos", "status") SELECT "descricao", "duracao", "id", "localizacao", "ongId", "requesitos", "status" FROM "Vaga";
DROP TABLE "Vaga";
ALTER TABLE "new_Vaga" RENAME TO "Vaga";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
