/*
  Warnings:

  - Added the required column `type` to the `tabungan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tabungan" ADD COLUMN     "saldo" INTEGER,
ADD COLUMN     "type" TEXT NOT NULL;
