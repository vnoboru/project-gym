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

async function find(daysTraining: number) {
  return prisma.list.findMany({
    where: {
      daysTraining: daysTraining,
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
  find,
  create,
  remove,
};

export default listRepository;
