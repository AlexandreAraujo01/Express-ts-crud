-- CreateTable
CREATE TABLE "Jogo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "produtora" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "idadeMinima" INTEGER NOT NULL
);
