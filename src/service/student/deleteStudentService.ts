import { IService } from '../../interfaces/IService';
import { deleteStudentModel } from '../../model/student/deleteStudentModel';

export async function deleteStudentService(id: number): Promise<IService> {
  try {
    const result = await deleteStudentModel(id);
    return { message: 'Student was deleted', data: result, statusCode: 200 };
  } catch (error) {
    throw error;
  }
}
