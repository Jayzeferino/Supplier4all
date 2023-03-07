-- CreateTable
CREATE TABLE "Category" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Supplier" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" INTEGER NOT NULL,
    "email" TEXT,
    "eccomerce" TEXT,
    "instragramUrl" TEXT,
    "rate" INTEGER,
    "categoryId" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Supplier_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Costumer" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "password" TEXT NOT NULL,
    "paymentStatus" TEXT,
    "paymentDate" DATETIME,
    "paymentdueDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FavoriteCostumerSupplier" (
    "CostumerId" TEXT NOT NULL,
    "SupplierId" TEXT NOT NULL,

    PRIMARY KEY ("CostumerId", "SupplierId"),
    CONSTRAINT "FavoriteCostumerSupplier_CostumerId_fkey" FOREIGN KEY ("CostumerId") REFERENCES "Costumer" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FavoriteCostumerSupplier_SupplierId_fkey" FOREIGN KEY ("SupplierId") REFERENCES "Supplier" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_Id_key" ON "Category"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_Id_key" ON "Supplier"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_Id_key" ON "Costumer"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");
