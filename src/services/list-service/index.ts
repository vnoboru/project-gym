import { notFoundError } from "@/errors";
import listRepository from "@/repositories/list-repository";

async function findList(daysTraining: number) {
  const list = await listRepository.find(daysTraining);

  if (!list) {
    throw notFoundError();
  }

  return list;
}

const listService = {
  findList,
};

export default listService;
