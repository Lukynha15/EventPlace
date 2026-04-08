/*
  Warnings:

  - You are about to drop the `Localization` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cep` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Localization" DROP CONSTRAINT "Localization_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cep" TEXT NOT NULL;

-- DropTable
DROP TABLE "Localization";
