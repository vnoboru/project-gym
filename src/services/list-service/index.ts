import { notFoundError } from "@/errors";
import listRepository from "@/repositories/list-repository";

async function findList() {
  const list = await listRepository.find();

  if (!list) {
    throw notFoundError();
  }

  return list;
}

const listService = {
  findList,
};

export default listService;
