import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.exercicesUncheckedCreateInput) {
  return prisma.exercices.create({
    data,
  });
}

const exercicesRepository = {
  create,
};

export default exercicesRepository;
