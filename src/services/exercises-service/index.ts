import { conflictError, notFoundError } from "@/errors";
import exercisesRepository from "@/repositories/exercises-repository";
import { exercises } from "@prisma/client";
import lodash from "lodash";

export async function createExercise({ nameExerc, bodyPart, classification }: CreateExercParams): Promise<exercises> {
  await validateUniqueExerc(nameExerc);

  return exercisesRepository.create({
    nameExerc,
    nameExercAc: lodash.deburr(nameExerc),
    bodyPart,
    classification,
  });
}

async function validateUniqueExerc(nameExerc: string) {
  const exerciseWithSameName = await exercisesRepository.findByNameExerc(nameExerc);

  if (exerciseWithSameName) {
    throw conflictError();
  }
}

export async function putExercise(
  exercId: number,
  { nameExerc, bodyPart, classification }: CreateExercParams,
): Promise<exercises> {
  const exercise = await exercisesRepository.findByExercId(exercId);

  if (!exercise) {
    throw notFoundError();
  }

  const resultExercise = await exercisesRepository.update(exercId, { nameExerc, bodyPart, classification });

  return resultExercise;
}

async function findExercises() {
  const listExercices = await exercisesRepository.find();

  if (!listExercices) {
    throw notFoundError();
  }

  return listExercices;
}

export type CreateExercParams = Pick<exercises, "nameExerc" | "bodyPart" | "classification">;
const exercisesService = {
  createExercise,
  putExercise,
  findExercises,
};

export default exercisesService;
