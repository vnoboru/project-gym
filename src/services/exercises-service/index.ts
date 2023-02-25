import exercisesRepository from "@/repositories/exercises-repository";
import { exercises } from "@prisma/client";
import { duplicatedExerciceError } from "./errors";

export async function createExercise({ nameExerc, bodyPart, classification }: CreateExercParams): Promise<exercises> {
  await validateUniqueExerc(nameExerc);

  return exercisesRepository.create({
    nameExerc,
    bodyPart,
    classification,
  });
}

async function validateUniqueExerc(nameExerc: string) {
  const exerciseWithSameName = await exercisesRepository.findByNameExerc(nameExerc);

  if (exerciseWithSameName) {
    throw duplicatedExerciceError();
  }
}

async function findExercises() {
  const listExercices = await exercisesRepository.find();

  return listExercices;
}

export type CreateExercParams = Pick<exercises, "nameExerc" | "bodyPart" | "classification">;
const exercisesService = {
  createExercise,
  findExercises,
};

export default exercisesService;
