import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByNameTechnique(nameTechnique: string, select?: Prisma.techniqueSelect) {
  const params: Prisma.techniqueFindUniqueOrThrowArgs = {
    where: {
      nameTechnique,
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

const techniqueRepository = {
  findByNameTechnique,
  create,
};

export default techniqueRepository;
