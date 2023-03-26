/*
  Warnings:

  - Added the required column `idTraining` to the `list` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "list" ADD COLUMN     "idTraining" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "training" (
    "id" SERIAL NOT NULL,
    "nameTraining" CITEXT NOT NULL,
    "nameTrainingAc" CITEXT,

    CONSTRAINT "training_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "training_nameTraining_key" ON "training"("nameTraining");

-- CreateIndex
CREATE UNIQUE INDEX "training_nameTrainingAc_key" ON "training"("nameTrainingAc");

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_idTraining_fkey" FOREIGN KEY ("idTraining") REFERENCES "training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
