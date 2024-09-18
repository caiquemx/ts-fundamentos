import { PrismaClient } from '@prisma/client';
import { IStudent } from '../../interfaces/IStudent';

const prisma = new PrismaClient();

export async function createStudentModel(payload: IStudent) {
  const { courses, ...studentData } = payload;

  const result = await prisma.student.create({
    data: {
      ...studentData,
      courses: {
        create: courses?.map((courseId: number) => ({
          course: { connect: { id: courseId } },
        })),
      },
    },
    include: {
      courses: true,
    },
  });

  return result;
}
