import { notFoundError } from "@/errors";
import listRepository from "@/repositories/list-repository";
import { list } from "@prisma/client";

async function createList(
  idExerc: number,
  idTechnique: number,
  daysTraining: number,
  idTraining: number,
): Promise<list> {
  return listRepository.create({
    idExerc,
    idTechnique,
    daysTraining,
    idTraining,
  });
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
