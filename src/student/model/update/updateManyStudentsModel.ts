import { PrismaClient } from '@prisma/client';
import { IUpdateManyStudentsPayload } from '../../interfaces/IUpdateManyStudentsPayload';

const prisma = new PrismaClient();

export async function updateManyStudentsModel(data: IUpdateManyStudentsPayload) {
  const result = await prisma.student.updateMany({
    where: data.condition,
    data: {
      ...data.payload,
    },
  });
  return result;
}
