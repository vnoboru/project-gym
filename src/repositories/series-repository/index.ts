import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.seriesUncheckedCreateInput) {
  return prisma.series.create({
    data,
  });
}

const seriesRepository = {
  create,
};

export default seriesRepository;
