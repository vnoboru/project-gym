import { conflictError, notFoundError } from "@/errors";
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

async function putTraining(trainingId: number, nameTraining: string): Promise<training> {
  const training = await trainingRepository.findByTrainingId(trainingId);

  if (!training) {
    throw notFoundError();
  }

  const resultExercise = await trainingRepository.update(trainingId, { nameTraining });

  return resultExercise;
}

async function findTrainings() {
  const listTrainings = await trainingRepository.find();

  if (!listTrainings) {
    throw notFoundError();
  }

  return listTrainings;
}

export async function deleteTraining(trainingId: number) {
  const exercise = await trainingRepository.findByTrainingId(trainingId);

  if (!exercise) {
    throw notFoundError();
  }

  const resultExercise = await trainingRepository.remove(trainingId);

  return resultExercise;
}

const trainingService = {
  createTraining,
  putTraining,
  findTrainings,
  deleteTraining,
};

export { trainingService };
