/*
  Warnings:

  - A unique constraint covering the columns `[nameExercAc]` on the table `exercises` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "exercises_nameExercAc_key" ON "exercises"("nameExercAc");
