import techniqueRepository from "@/repositories/technique-repository";
import { technique } from "@prisma/client";
import { duplicatedExerciceError } from "./errors";

export async function createTechnique({ nameTechnique, description }: CreateTechniqueParams): Promise<technique> {
  await validateUniqueNameTechnique(nameTechnique);

  return techniqueRepository.create({
    nameTechnique,
    description,
  });
}

async function validateUniqueNameTechnique(nameTechnique: string) {
  const techniqueWithSameName = await techniqueRepository.findByNameTechnique(nameTechnique);

  if (techniqueWithSameName) {
    throw duplicatedExerciceError();
  }
}

export type CreateTechniqueParams = Pick<technique, "nameTechnique" | "description">;

const techniqueServices = {
  createTechnique,
};

export { techniqueServices };
