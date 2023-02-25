import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByNameExerc(nameExerc: string, select?: Prisma.exercisesSelect) {
  const params: Prisma.exercisesFindUniqueOrThrowArgs = {
    where: {
      nameExerc,
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

async function find() {
  return prisma.exercises.findMany();
}

const exercisesRepository = {
  findByNameExerc,
  create,
  find,
};

export default exercisesRepository;
