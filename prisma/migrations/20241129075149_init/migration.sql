-- CreateTable
CREATE TABLE "tabungan" (
    "id" TEXT NOT NULL,
    "uang" INTEGER NOT NULL,
    "waktu" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tabungan_pkey" PRIMARY KEY ("id")
);
