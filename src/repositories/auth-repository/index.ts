import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findByNameEmail(email: string, select?: Prisma.userSelect) {
  const params: Prisma.userFindUniqueOrThrowArgs = {
    where: {
      email: email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function create(data: Prisma.userUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}

const authRepository = {
  findByNameEmail,
  create,
};

export default authRepository;
