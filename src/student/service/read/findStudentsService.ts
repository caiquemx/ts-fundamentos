import { findStudentsModel } from '../../model/read/findStudentsModel';
import { IService } from '../../../interfaces/IService';

export async function findStudentsService(): Promise<IService> {
  try {
    const students = await findStudentsModel();
    return { message: '', data: students, statusCode: 200 };
  } catch (error) {
    throw error;
  }
}
