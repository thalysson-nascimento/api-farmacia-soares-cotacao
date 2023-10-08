-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em andamento',
    "hashQuote" TEXT NOT NULL,
    "typeQuote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "id_quote" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "distributor" TEXT,
    "amount" DOUBLE PRECISION,
    "value" TEXT,
    "status" BOOLEAN DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_id_quote_fkey" FOREIGN KEY ("id_quote") REFERENCES "quote"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
