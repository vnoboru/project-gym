import { prisma } from "@/config";
import { Prisma } from "@prisma/client";
import lodash from "lodash";

async function findByNameTechnique(nameTechnique: string, select?: Prisma.techniqueSelect) {
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

async function find() {
  return prisma.technique.findMany();
}
const techniqueRepository = {
  findByNameTechnique,
  findByTechniqueId,
  create,
  update,
  find,
};

export default techniqueRepository;
