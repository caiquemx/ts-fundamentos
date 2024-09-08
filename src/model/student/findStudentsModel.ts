import { PrismaClient } from '@prisma/client';
import { IStudent } from '../../interfaces/student/IStudent';

const prisma = new PrismaClient();

export async function findStudentsModel(): Promise<IStudent[]> {
  const users = await prisma.student.findMany({
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
  return users;
}
