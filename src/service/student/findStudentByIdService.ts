import { Request } from 'express';

import { findStudentByIdModel } from '../../model/student/findStudentByIdModel.ts';
import { IService } from '../../interfaces/IService.ts';

export async function findStudentByIdService(req: Request): Promise<IService> {
  try {
    const id = Number(req.params.id);
    const user = await findStudentByIdModel(id);
    return { message: '', data: user, statusCode: 200 };
  } catch (error) {
    throw error;
  }
}
