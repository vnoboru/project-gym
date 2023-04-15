import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import lodash from "lodash";

async function findBySameName(nameTechnique: string, select?: Prisma.techniqueSelect) {
  const params: Prisma.techniqueFindUniqueOrThrowArgs = {
    where: {
      nameTechniqueAc: lodash.deburr(nameTechnique),
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.technique.findUnique(params);
}

async function findByTechniqueId(techniqueId: number, select?: Prisma.techniqueSelect) {
  const params: Prisma.techniqueFindUniqueOrThrowArgs = {
    where: {
      id: techniqueId,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.technique.findUnique(params);
}

async function create(data: Prisma.techniqueUncheckedCreateInput) {
  return prisma.technique.create({
    data,
  });
}

async function update(techniqueId: number, data: Prisma.techniqueUncheckedUpdateInput) {
  return prisma.technique.update({
    where: {
      id: techniqueId,
    },
    data,
  });
}

async function remove(techniqueId: number) {
  return prisma.technique.delete({
    where: {
      id: techniqueId,
    },
  });
}

async function find() {
  return prisma.technique.findMany();
}

async function findByNameTechnique(nameTechnique: string) {
  return prisma.technique.findMany({
    where: {
      nameTechnique,
    },
  });
}

const techniqueRepository = {
  findBySameName,
  findByTechniqueId,
  create,
  update,
  remove,
  find,
  findByNameTechnique,
};

export default techniqueRepository;
