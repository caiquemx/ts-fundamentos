import { PrismaClient } from '@prisma/client';
import { IStudent } from '../../interfaces/IStudent';

const prisma = new PrismaClient();

export async function findStudentByIdModel(id: number): Promise<IStudent | null> {
  const user = await prisma.student.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      age: true,
      email: true,
      courses: {
        select: {
          courseId: true,
        },
      },
    },
  });
  return user;
}
