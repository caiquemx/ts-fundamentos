import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function deleteStudentModel(id: number) {
  const result = await prisma.student.delete({
    where: {
      id,
    },
  });
  return { id: result.id };
}
