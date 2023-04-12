/*
  Warnings:

  - Added the required column `userId` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `list` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `technique` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "list" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "technique" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "training" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "list" ADD CONSTRAINT "list_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "technique" ADD CONSTRAINT "technique_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "training" ADD CONSTRAINT "training_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
