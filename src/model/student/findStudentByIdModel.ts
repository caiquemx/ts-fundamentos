import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function findStudentByIdModel(id: number) {
  const user = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      courses: true,
    },
  });
  return user;
}
