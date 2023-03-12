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
    "contact" TEXT NOT NULL,
    "email" TEXT,
    "eccomerce" TEXT,
    "instragramUrl" TEXT,
    "rate" INTEGER,
    "categoryId" TEXT NOT NULL,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Costumer" (
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

-- CreateTable
CREATE TABLE "FavoriteCostumerSupplier" (
    "CostumerId" TEXT NOT NULL,
    "SupplierId" TEXT NOT NULL,

    PRIMARY KEY ("CostumerId", "SupplierId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_Id_key" ON "Category"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_Id_key" ON "Supplier"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_Id_key" ON "Costumer"("Id");

-- CreateIndex
CREATE UNIQUE INDEX "Costumer_email_key" ON "Costumer"("email");
