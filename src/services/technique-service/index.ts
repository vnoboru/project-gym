import { conflictError, notFoundError } from "@/errors";
import techniqueRepository from "@/repositories/technique-repository";
import { technique } from "@prisma/client";
import lodash from "lodash";

async function createTechnique({
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

async function putTechnique(
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
  const listTechniques = await techniqueRepository.find();

  if (!listTechniques) {
    throw notFoundError();
  }

  return listTechniques;
}

async function deleteTechnique(techniqueId: number) {
  const technique = await techniqueRepository.findByTechniqueId(techniqueId);

  if (!technique) {
    throw notFoundError();
  }

  const resultTechnique = await techniqueRepository.remove(techniqueId);

  return resultTechnique;
}

export type CreateTechniqueParams = Pick<technique, "nameTechnique" | "description" | "numberSeries" | "numberRep">;

const techniqueService = {
  createTechnique,
  putTechnique,
  findTechniques,
  deleteTechnique,
};

export { techniqueService };
