import { NextFunction, Request, Response } from 'express';
import { deleteStudentService } from '../../service/student/deleteStudentService';

export async function deleteStudentController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const { message, data, statusCode } = await deleteStudentService(id);
    res.status(statusCode).json({
      message,
      data,
    });
  } catch (error) {
    next(error);
  }
}
