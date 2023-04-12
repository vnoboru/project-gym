/*
  Warnings:

  - You are about to drop the column `userId` on the `exercises` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `list` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `technique` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `training` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_userId_fkey";

-- DropForeignKey
ALTER TABLE "list" DROP CONSTRAINT "list_userId_fkey";

-- DropForeignKey
ALTER TABLE "technique" DROP CONSTRAINT "technique_userId_fkey";

-- DropForeignKey
ALTER TABLE "training" DROP CONSTRAINT "training_userId_fkey";

-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "list" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "technique" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "training" DROP COLUMN "userId";
