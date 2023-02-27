-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- CreateTable
CREATE TABLE "exercises" (
  "id" SERIAL NOT NULL,
  "nameExerc" CITEXT NOT NULL,
  "nameExercAc" CITEXT,
  "bodyPart" CITEXT,
  "classification" VARCHAR(255),
  CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "list" (
  "id" SERIAL NOT NULL,
  "idExerc" INTEGER NOT NULL,
  "idTechnique" INTEGER NOT NULL,
  CONSTRAINT "list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "technique" (
  "id" SERIAL NOT NULL,
  "nameTechnique" CITEXT,
  "description" VARCHAR(4000),
  "numberSeries" VARCHAR(255),
  "numberRep" VARCHAR(255),
  CONSTRAINT "technique_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercises_nameExerc_key" ON "exercises"("nameExerc");

-- CreateIndex
CREATE UNIQUE INDEX "technique_nameTechnique_key" ON "technique"("nameTechnique");

-- AddForeignKey
ALTER TABLE
  "list"
ADD
  CONSTRAINT "list_idExerc_fkey" FOREIGN KEY ("idExerc") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "list"
ADD
  CONSTRAINT "list_idTechnique_fkey" FOREIGN KEY ("idTechnique") REFERENCES "technique"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE COLLATION ignore_accent (
  provider = icu,
  locale = 'und-u-ks-level1-kc-true',
  deterministic = false
);

ALTER TABLE
  exercises
ALTER COLUMN
  "nameExerc" TYPE citext COLLATE ignore_accent;

ALTER TABLE
  technique
ALTER COLUMN
  "nameTechnique" TYPE citext COLLATE ignore_accent;

ALTER TABLE
  exercises
ALTER COLUMN
  "nameExercAc" TYPE citext COLLATE ignore_accent;
