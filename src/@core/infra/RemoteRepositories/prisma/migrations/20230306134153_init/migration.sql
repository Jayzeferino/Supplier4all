/*
  Warnings:

  - Made the column `paymentDate` on table `Costumer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `paymentStatus` on table `Costumer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Costumer" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "password" TEXT NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "paymentDate" DATETIME NOT NULL,
    "paymentdueDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Costumer" ("Id", "createdAt", "email", "name", "password", "paymentDate", "paymentStatus", "paymentdueDate", "phoneNumber", "updatedAt") SELECT "Id", "createdAt", "email", "name", "password", "paymentDate", "paymentStatus", "paymentdueDate", "phoneNumber", "updatedAt" FROM "Costumer";
DROP TABLE "Costumer";
ALTER TABLE "new_Costumer" RENAME TO "Costumer";
CREATE UNIQUE INDEX "Costumer_Id_key" ON "Costumer"("Id");
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
