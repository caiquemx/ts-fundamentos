import { Request } from 'express';
import { IService } from '../../../interfaces/IService';
import { deleteStudentModel } from '../../model/delete/deleteStudentModel';

export async function deleteStudentService(req: Request): Promise<IService> {
  try {
    const id = Number(req.params.id);
    const result = await deleteStudentModel(id);
    return { message: `User deleted`, data: result, statusCode: 200 };
  } catch (error) {
    throw error;
  }
}
