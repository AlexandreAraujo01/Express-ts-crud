-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Log" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idjogo" INTEGER,
    "acao" TEXT NOT NULL,
    "data" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Log" ("acao", "data", "id", "idjogo") SELECT "acao", "data", "id", "idjogo" FROM "Log";
DROP TABLE "Log";
ALTER TABLE "new_Log" RENAME TO "Log";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
