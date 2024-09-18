import { studentCourses } from '../types/studentCoursesType';

export interface IStudent {
  id?: number;
  name: string;
  age: number;
  email: string;
  courses?: number[];
}
