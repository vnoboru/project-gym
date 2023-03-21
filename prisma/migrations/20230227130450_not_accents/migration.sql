/*
  Warnings:

  - A unique constraint covering the columns `[nameExercAc]` on the table `exercises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nameTechniqueAc]` on the table `technique` will be added. If there are existing duplicate values, this will fail.
  - Made the column `nameTechnique` on table `technique` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "technique" ALTER COLUMN "nameTechnique" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "exercises_nameExercAc_key" ON "exercises"("nameExercAc");

-- CreateIndex
CREATE UNIQUE INDEX "technique_nameTechniqueAc_key" ON "technique"("nameTechniqueAc");
