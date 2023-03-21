import { conflictError, notFoundError } from "@/errors";
import techniqueRepository from "@/repositories/technique-repository";
import { technique } from "@prisma/client";
import lodash from "lodash";

export async function createTechnique({
  nameTechnique,
  description,
  numberSeries,
  numberRep,
}: CreateTechniqueParams): Promise<technique> {
  await validateUniqueNameTechnique(nameTechnique);

  return techniqueRepository.create({
    nameTechnique,
    nameTechniqueAc: lodash.deburr(nameTechnique),
    description,
    numberSeries,
    numberRep,
  });
}

async function validateUniqueNameTechnique(nameTechnique: string) {
  const techniqueWithSameName = await techniqueRepository.findByNameTechnique(nameTechnique);

  if (techniqueWithSameName) {
    throw conflictError();
  }
}

export async function putTechnique(
  techniqueId: number,
  { nameTechnique, description, numberSeries, numberRep }: CreateTechniqueParams,
): Promise<technique> {
  const exercise = await techniqueRepository.findByTechniqueId(techniqueId);

  if (!exercise) {
    throw notFoundError();
  }

  const resultExercise = await techniqueRepository.update(techniqueId, {
    nameTechnique,
    description,
    numberSeries,
    numberRep,
  });

  return resultExercise;
}

async function findTechniques() {
  const listExercices = await techniqueRepository.find();

  if (!listExercices) {
    throw notFoundError();
  }

  return listExercices;
}

export type CreateTechniqueParams = Pick<technique, "nameTechnique" | "description" | "numberSeries" | "numberRep">;

const techniqueService = {
  createTechnique,
  putTechnique,
  findTechniques
};

export { techniqueService };
