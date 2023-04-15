import { notFoundError } from "@/errors";
import listRepository from "@/repositories/list-repository";
import { Prisma } from "@prisma/client";

async function createList(lists: Prisma.listUncheckedCreateInput[]) {
  return Promise.all(lists.map(listRepository.create));
}

async function findList(daysTraining: number) {
  const list = await listRepository.find(daysTraining);

  if (!list) {
    throw notFoundError();
  }

  return list;
}

async function deleteList(listId: number) {
  const list = await listRepository.findByListId(listId);

  if (!list) {
    throw notFoundError();
  }

  const resultList = await listRepository.remove(listId);

  return resultList;
}
const listService = {
  findList,
  createList,
  deleteList,
};

export default listService;
