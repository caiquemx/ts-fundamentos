import { studentCourses } from '../../types/student/studentCoursesType';

export interface IStudent {
  id: number;
  name: string;
  age: number;
  email: string;
  courses: studentCourses[];
}
