import exercicesRepository from "@/repositories/exercices-repository";
import { exercices } from "@prisma/client";
import { duplicatedExerciceError } from "./errors";

export async function createExercice({ nameExerc, bodyPart, classification }: CreateExercParams): Promise<exercices> {
  await validateUniqueExerc(nameExerc);

  return exercicesRepository.create({
    nameExerc,
    bodyPart,
    classification,
  });
}

async function validateUniqueExerc(nameExerc: string) {
  const exerciceWithSameName = await exercicesRepository.findByNameExerc(nameExerc);

  if (exerciceWithSameName) {
    throw duplicatedExerciceError();
  }
}

async function findExercices() {
  const listExercices = await exercicesRepository.find();

  return listExercices;
}

export type CreateExercParams = Pick<exercices, "nameExerc" | "bodyPart" | "classification">;
const exercicesService = {
  createExercice,
  findExercices,
};

export default exercicesService;
