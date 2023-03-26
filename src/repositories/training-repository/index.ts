import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import lodash from "lodash";

async function findByNameTraining(nameTraining: string, select?: Prisma.trainingSelect) {
  const params: Prisma.trainingFindUniqueOrThrowArgs = {
    where: {
      nameTrainingAc: lodash.deburr(nameTraining),
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.training.findUnique(params);
}

async function create(data: Prisma.trainingUncheckedCreateInput) {
  return prisma.training.create({
    data,
  });
}

const trainingRepository = {
  findByNameTraining,
  create
};

export default trainingRepository;
