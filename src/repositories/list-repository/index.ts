import { prisma } from "@/config";

async function find() {
  return prisma.list.findMany({
    include: {
      exercices: {
        select: {
          nameExerc: true,
          bodyPart: true,
          classification: true,
        },
      },
      technique: {
        select: {
          nameTechnique: true,
          description: true,
          numberSeries: true,
          numberRep: true,
        },
      },
    },
  });
}

const listRepository = {
  find,
};

export default listRepository;
