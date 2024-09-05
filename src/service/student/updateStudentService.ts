import { updateStudentsModel } from '../../model/student/updateStudentModel';
import { IService } from '../../interfaces/IService';
import { IPayloadStudent } from '../../interfaces/student/IPayloadStudent';
import { Request, Response } from 'express';

export async function updateStudentsService(
  req: Request,
  res: Response
): Promise<IService> {
  try {
    const payload: IPayloadStudent = {
      id: req.params.id,
      ...req.body,
    };
    const result = await updateStudentsModel(payload);
    return { message: 'Student Was Updated', data: result, statusCode: 202 };
  } catch (error) {
    throw error;
  }
}
