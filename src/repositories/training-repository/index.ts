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

async function findByTrainingId(trainingId: number, select?: Prisma.trainingSelect) {
  const params: Prisma.trainingFindUniqueOrThrowArgs = {
    where: {
      id: trainingId,
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

async function update(trainingId: number, data: Prisma.trainingUncheckedUpdateInput) {
  return prisma.training.update({
    where: {
      id: trainingId,
    },
    data,
  });
}

async function remove(trainingId: number) {
  return prisma.training.delete({
    where: {
      id: trainingId,
    },
  });
}

async function find() {
  return prisma.training.findMany();
}
const trainingRepository = {
  findByNameTraining,
  findByTrainingId,
  create,
  update,
  remove,
  find,
};

export default trainingRepository;
