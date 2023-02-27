import techniqueRepository from "@/repositories/technique-repository";
import { technique } from "@prisma/client";
import { duplicatedExerciseError } from "./errors";

export async function createTechnique({
  nameTechnique,
  description,
  numberSeries,
  numberRep,
}: CreateTechniqueParams): Promise<technique> {
  await validateUniqueNameTechnique(nameTechnique);

  return techniqueRepository.create({
    nameTechnique,
    description,
    numberSeries,
    numberRep,
  });
}

async function validateUniqueNameTechnique(nameTechnique: string) {
  const techniqueWithSameName = await techniqueRepository.findByNameTechnique(nameTechnique);

  if (techniqueWithSameName) {
    throw duplicatedExerciseError();
  }
}

export type CreateTechniqueParams = Pick<technique, "nameTechnique" | "description" | "numberSeries" | "numberRep">;

const techniqueServices = {
  createTechnique,
};

export { techniqueServices };
