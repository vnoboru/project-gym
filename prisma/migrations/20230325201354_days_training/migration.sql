/*
  Warnings:

  - Added the required column `daysTraining` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list" ADD COLUMN     "daysTraining" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "technique" ALTER COLUMN "nameTechnique" DROP NOT NULL;
