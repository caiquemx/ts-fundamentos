import { Request } from 'express';
import { IService } from '../../../interfaces/IService';
import { updateManyStudentsModel } from '../../model/update/updateManyStudentsModel';
import { IUpdateManyStudentsPayload } from '../../interfaces/IUpdateManyStudentsPayload';

export async function updateManyStudentsService(req: Request): Promise<IService> {
  try {
    const payload: IUpdateManyStudentsPayload = req.body;
    const result = await updateManyStudentsModel(payload);
    return { message: 'Students were updated', data: result, statusCode: 202 };
  } catch (error) {
    throw error;
  }
}
