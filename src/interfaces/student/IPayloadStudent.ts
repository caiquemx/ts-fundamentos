import { studentCourses } from '../../types/student/studentCoursesType';

export interface IPayloadStudent {
  id: number;
  name?: string;
  age?: number;
  email?: string;
  courses?: studentCourses[];
}
