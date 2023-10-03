-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'em andamento',
    "hashQuote" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "quote_pkey" PRIMARY KEY ("id")
);
