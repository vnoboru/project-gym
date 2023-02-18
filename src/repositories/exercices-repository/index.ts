import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByNameExerc(nameExerc: string, select?: Prisma.exercicesSelect) {
  const params: Prisma.exercicesFindUniqueOrThrowArgs = {
    where: {
      nameExerc,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.exercices.findUnique(params);
}

async function create(data: Prisma.exercicesUncheckedCreateInput) {
  return prisma.exercices.create({
    data,
  });
}

const exercicesRepository = {
  findByNameExerc,
  create,
};

export default exercicesRepository;
