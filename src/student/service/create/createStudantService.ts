import { IService } from '../../../interfaces/IService';
import { IStudent } from '../../interfaces/IStudent';
import { createStudentModel } from '../../model/create/createStudentModel';

export async function createStudentService(payload: IStudent): Promise<IService> {
  try {
    const result = await createStudentModel(payload);
    return { message: 'User was created', data: result, statusCode: 201 };
  } catch (error) {
    throw error;
  }
}
