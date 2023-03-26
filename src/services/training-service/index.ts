import { conflictError } from "@/errors";
import trainingRepository from "@/repositories/training-repository";
import { training } from "@prisma/client";
import lodash from "lodash";

export async function createTraining(nameTraining: string): Promise<training> {
  await validateUniqueNameTraining(nameTraining);

  return trainingRepository.create({
    nameTraining,
    nameTrainingAc: lodash.deburr(nameTraining),
  });
}

async function validateUniqueNameTraining(nameTraining: string) {
  const exerciseWithSameName = await trainingRepository.findByNameTraining(nameTraining);

  if (exerciseWithSameName) {
    throw conflictError();
  }
}

const trainingService = {
  createTraining,
};

export { trainingService };
