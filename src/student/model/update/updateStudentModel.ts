import { PrismaClient } from '@prisma/client';
import { IPayloadStudent } from '../../interfaces/IPayloadStudent';

const prisma = new PrismaClient();

export async function updateStudentsModel(payload: IPayloadStudent) {
  const { id, ...data } = payload;
  const result = await prisma.student.update({
    where: {
      id,
    },
    data: {
      ...data,
    },
  });
  return result;
}
