import exercicesRepository from "@/repositories/exercices-repository";
import { exercices } from "@prisma/client";

export async function createExercice({ nameExerc, bodyPart, classification }: CreateExercParams): Promise<exercices> {
  return exercicesRepository.create({
    nameExerc,
    bodyPart,
    classification,
  });
}

export type CreateExercParams = Pick<exercices, "nameExerc" | "bodyPart" | "classification">;

const exercicesService = {
  createExercice,
};

export default exercicesService;
