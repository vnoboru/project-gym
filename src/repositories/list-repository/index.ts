import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByListId(listId: number, select?: Prisma.listSelect) {
  const params: Prisma.listFindUniqueOrThrowArgs = {
    where: {
      id: listId,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.list.findUnique(params);
}

async function create(data: Prisma.listUncheckedCreateInput) {
  return prisma.list.create({
    data,
  });
}

async function findAll() {
  return prisma.list.findMany({
    include: {
      training: true,
      exercices: true,
      technique: true,
    },
  });
}

async function find(daysTraining: number) {
  return prisma.list.findMany({
    where: {
      daysTraining: daysTraining,
    },
    include: {
      training: true,
      exercices: true,
      technique: true,
    },
  });
}

async function remove(listId: number) {
  return prisma.list.delete({
    where: {
      id: listId,
    },
  });
}

const listRepository = {
  findByListId,
  findAll,
  find,
  create,
  remove,
};

export default listRepository;
