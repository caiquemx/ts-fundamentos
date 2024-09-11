import { PrismaClient } from '@prisma/client';
import { IStudent } from '../../interfaces/IStudent';

const prisma = new PrismaClient();

export async function deleteStudentModel(id: number): Promise<IStudent> {
  // Usando uma transação para garantir que ambas as operações sejam atômicas
  const transaction = await prisma.$transaction([
    prisma.studentCourses.deleteMany({
      where: {
        studentId: id,
      },
    }),
    prisma.student.delete({
      where: { id },
      select: {
        id: true,
        name: true,
        age: true,
        email: true,
        courses: { select: { courseId: true } },
      },
    }),
  ]);

  return transaction[1]; // O segundo item da transação é o estudante deletado
}
