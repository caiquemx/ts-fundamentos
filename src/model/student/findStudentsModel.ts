import { PrismaClient } from '@prisma/client';
import { IStudent } from '../../interfaces/student/IStudent';

const prisma = new PrismaClient();

export async function findStudentByIdModel(
  id: number,
  isActive: boolean = true
): Promise<IStudent | null> {
  const user = await prisma.student.findUnique({
    where: {
      id,
      isActive,
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

export async function findStudentsModel(isActive: boolean = true): Promise<IStudent[]> {
  const users = await prisma.student.findMany({
    where: {
      isActive,
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
  return users;
}
