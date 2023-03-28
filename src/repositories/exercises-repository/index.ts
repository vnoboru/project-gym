import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import lodash from "lodash";

async function findByNameExerc(nameExerc: string, select?: Prisma.exercisesSelect) {
  const params: Prisma.exercisesFindUniqueOrThrowArgs = {
    where: {
      nameExercAc: lodash.deburr(nameExerc),
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.exercises.findUnique(params);
}

async function findByExercId(exercId: number, select?: Prisma.exercisesSelect) {
  const params: Prisma.exercisesFindUniqueOrThrowArgs = {
    where: {
      id: exercId,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.exercises.findUnique(params);
}

async function create(data: Prisma.exercisesUncheckedCreateInput) {
  return prisma.exercises.create({
    data,
  });
}

async function update(exercId: number, data: Prisma.exercisesUncheckedUpdateInput) {
  return prisma.exercises.update({
    where: {
      id: exercId,
    },
    data,
  });
}

async function remove(exercId: number) {
  return prisma.exercises.delete({
    where: {
      id: exercId,
    },
  });
}

async function find() {
  return prisma.exercises.findMany();
}

const exercisesRepository = {
  findByNameExerc,
  findByExercId,
  create,
  update,
  remove,
  find,
};

export default exercisesRepository;
