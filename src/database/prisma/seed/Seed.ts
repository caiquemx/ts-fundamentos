import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  // Populando os departamentos
  const departments = await prisma.department.createMany({
    data: [
      {
        name: 'Computer Science',
        head: 'Dr. Emily Roberts',
        building: 'Science Building A',
      },
      {
        name: 'Mechanical Engineering',
        head: 'Dr. Michael Turner',
        building: 'Engineering Complex',
      },
      {
        name: 'Electrical Engineering',
        head: 'Dr. Sophia Harris',
        building: 'Science Building B',
      },
      {
        name: 'Business Administration',
        head: 'Dr. James Wilson',
        building: 'Business Center',
      },
      {
        name: 'Civil Engineering',
        head: 'Dr. Olivia Brown',
        building: 'Engineering Complex',
      },
      { name: 'Architecture', head: 'Dr. William Johnson', building: 'Design Studio' },
    ],
  });

  // Populando os professores
  const teachers = await prisma.teacher.createMany({
    data: [
      {
        name: 'Dr. Emily Roberts',
        age: 45,
        email: 'emily.roberts@university.com',
        departmentId: 1,
      },
      {
        name: 'Dr. Michael Turner',
        age: 50,
        email: 'michael.turner@university.com',
        departmentId: 2,
      },
      {
        name: 'Dr. Sophia Harris',
        age: 38,
        email: 'sophia.harris@university.com',
        departmentId: 3,
      },
      {
        name: 'Dr. James Wilson',
        age: 42,
        email: 'james.wilson@university.com',
        departmentId: 4,
      },
      {
        name: 'Dr. Olivia Brown',
        age: 47,
        email: 'olivia.brown@university.com',
        departmentId: 5,
      },
      {
        name: 'Dr. William Johnson',
        age: 40,
        email: 'william.johnson@university.com',
        departmentId: 6,
      },
    ],
  });

  // Populando os cursos
  const courses = await prisma.course.createMany({
    data: [
      { name: 'Introduction to Programming', departmentId: 1 },
      { name: 'Data Structures', departmentId: 1 },
      { name: 'Thermodynamics', departmentId: 2 },
      { name: 'Fluid Mechanics', departmentId: 2 },
      { name: 'Circuit Analysis', departmentId: 3 },
      { name: 'Electromagnetics', departmentId: 3 },
      { name: 'Architectural Design', departmentId: 6 },
    ],
  });

  // Populando os estudantes
  const students = await prisma.student.createMany({
    data: [
      {
        name: 'Alice Johnson',
        age: 21,
        email: 'alice.johnson@example.com',
        enrollmentDate: new Date('2023-08-20'),
      },
      {
        name: 'Bob Smith',
        age: 22,
        email: 'bob.smith@example.com',
        enrollmentDate: new Date('2022-09-15'),
      },
      {
        name: 'Catherine Lee',
        age: 20,
        email: 'catherine.lee@example.com',
        enrollmentDate: new Date('2023-01-12'),
      },
      {
        name: 'David Brown',
        age: 23,
        email: 'david.brown@example.com',
        enrollmentDate: new Date('2021-06-30'),
      },
      {
        name: 'Eva Davis',
        age: 21,
        email: 'eva.davis@example.com',
        enrollmentDate: new Date('2023-03-10'),
      },
      {
        name: 'Frank Wilson',
        age: 24,
        email: 'frank.wilson@example.com',
        enrollmentDate: new Date('2020-11-05'),
      },
      {
        name: 'Grace Miller',
        age: 22,
        email: 'grace.miller@example.com',
        enrollmentDate: new Date('2022-04-25'),
      },
      {
        name: 'Henry Clark',
        age: 23,
        email: 'henry.clark@example.com',
        enrollmentDate: new Date('2021-09-17'),
      },
      {
        name: 'Isabella White',
        age: 20,
        email: 'isabella.white@example.com',
        enrollmentDate: new Date('2023-07-11'),
      },
      {
        name: 'Jack Martin',
        age: 21,
        email: 'jack.martin@example.com',
        enrollmentDate: new Date('2022-02-20'),
      },
      {
        name: 'Katherine Moore',
        age: 22,
        email: 'katherine.moore@example.com',
        enrollmentDate: new Date('2021-08-01'),
      },
      {
        name: 'Liam Taylor',
        age: 23,
        email: 'liam.taylor@example.com',
        enrollmentDate: new Date('2020-12-10'),
      },
    ],
  });

  // Populando a relação N:N entre Students e Courses
  const studentCourses = await prisma.studentCourses.createMany({
    data: [
      { studentId: 1, courseId: 1 },
      { studentId: 2, courseId: 3 },
      { studentId: 3, courseId: 5 },
      { studentId: 4, courseId: 4 },
      { studentId: 5, courseId: 6 },
      { studentId: 6, courseId: 1 },
      { studentId: 7, courseId: 7 },
      { studentId: 8, courseId: 3 },
      { studentId: 9, courseId: 1 },
      { studentId: 10, courseId: 5 },
      { studentId: 11, courseId: 6 },
      { studentId: 12, courseId: 4 },
    ],
  });

  // Populando a relação N:N entre Teachers e Courses
  const teacherCourses = await prisma.teacherCourses.createMany({
    data: [
      { teacherId: 1, courseId: 1 },
      { teacherId: 1, courseId: 2 },
      { teacherId: 2, courseId: 3 },
      { teacherId: 2, courseId: 4 },
      { teacherId: 3, courseId: 5 },
      { teacherId: 3, courseId: 6 },
      { teacherId: 6, courseId: 7 },
    ],
  });

  console.log('Database seeded successfully');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
