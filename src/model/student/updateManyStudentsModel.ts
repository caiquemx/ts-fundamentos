import { PrismaClient } from '@prisma/client';
import { IPayloadStudent } from '../../interfaces/student/IPayloadStudent';
import { IUpdateManyStudentsPayload } from '../../interfaces/student/IUpdateManyStudentsPayload';

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
